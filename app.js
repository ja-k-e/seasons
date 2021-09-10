const figures = document.querySelectorAll("figure");
const hue = Math.round(Math.random() * 360);
figures.forEach((figure, i) => {
  figure.style.setProperty("--hue", i * 38 + hue);
  const img = figure.querySelector("img");
  if (img.complete || img.readyState === 4) {
    figure.classList.add("loaded");
  } else {
    img.addEventListener("load", () => figure.classList.add("loaded"));
  }
});
