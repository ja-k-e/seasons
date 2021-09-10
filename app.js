const images = document.querySelectorAll("div");
const hue = Math.round(Math.random() * 360);
images.forEach((div, i) => {
  div.style.setProperty("--hue", i * 38 + hue);
  const img = div.querySelector("img");
  if (img.complete || img.readyState === 4) {
    div.classList.add("loaded");
  } else {
    img.addEventListener("load", () => div.classList.add("loaded"));
  }
});
