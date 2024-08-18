export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}
