const canvas = document.getElementById("field");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "#000000";

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

export default canvas.getContext("2d");