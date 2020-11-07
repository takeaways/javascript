export function randomColor() {
  const color = () => Math.floor(Math.random() * 255);
  return `rgb(${color()},${color()},${color()})`;
}

export function appendItem(item, target) {
  target.appendChild(item);
}
