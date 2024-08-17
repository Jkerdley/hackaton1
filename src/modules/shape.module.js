import { Module } from '../core/module';
import { random } from '../utils';
export class ShapeModule extends Module {
  constructor() {
    super('shape', 'Random Shape');
  }

  trigger() {
    const shape = document.createElement('div');
    const size = random(50, 200);
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    shape.style.position = 'absolute';
    shape.style.top = `${random(0, window.innerHeight - size)}px`;
    shape.style.left = `${random(0, window.innerWidth - size)}px`;

    document.body.appendChild(shape);

    setTimeout(() => shape.remove(), 4000);  // Удалить фигуру через 3 секунды
  }
}