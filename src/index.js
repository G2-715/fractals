import context from "./canvas";

const speed = 100;
const golden = 1.61803;
const divider = golden;
const verticeCount = 5;

function Vertice(x, y) {
  return { x, y };
}

function getRandomVertice(vertices) {
  return vertices[Math.floor(Math.random() * verticeCount)];
}

function createVerticesFromAnglesCount(count) {
  const center = new Vertice(window.innerWidth / 2, window.innerHeight / 2);
  const radius = window.innerHeight / 2;

  let vertices = [];

  for (let i = 0; i < count; i++) {
    let vertice = new Vertice(
      center.x + radius * Math.cos(-Math.PI / 2 + 2 * Math.PI * i / count),
      center.y + radius * Math.sin(-Math.PI / 2 + 2 * Math.PI * i / count)
    );

    vertices.push(vertice);
  }

  return vertices;
}

const vertices = createVerticesFromAnglesCount(verticeCount);

let positions = [...Array(speed).keys()].map(() => getRandomVertice(vertices));

(function main() {
  context.strokeStyle = "#ffffff";
  positions.forEach((position, index) => {
    const { x, y } = position;

    context.beginPath();
    context.arc(x, y, .5, 0, 2 * Math.PI, true);
    context.stroke();
    context.closePath();

    const randomVertice = getRandomVertice(vertices);

    const diff = new Vertice(
      randomVertice.x - x,
      randomVertice.y - y
    );

    positions[index] = new Vertice(
      x + diff.x / divider,
      y + diff.y / divider
    );
  });

  requestAnimationFrame(main);
}());

