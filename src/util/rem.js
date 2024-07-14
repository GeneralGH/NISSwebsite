// rem.js

function setRem() {
  let baseSize, scale;
  if (window.matchMedia("(max-width: 750px)").matches) {
    baseSize = 20;
    scale = document.documentElement.clientWidth / 750;
  } else {
    baseSize = 16;
    scale = document.documentElement.clientWidth / 1920;
  }
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}

setRem();

window.addEventListener('resize', setRem);
