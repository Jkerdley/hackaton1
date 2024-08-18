import { Module } from '../core/module';
import { random } from '../utils';

export class ShapeModule extends Module {
  constructor() {
    super('shape', 'Случайная фигура');
  }

  createSquare() {
    const square = document.createElement('div');
    const size = random(50, 200);
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    square.style.position = 'absolute';
    square.style.top = `${random(0, window.innerHeight - size)}px`;
    square.style.left = `${random(0, window.innerWidth - size)}px`;
    return square;
  }

  createCircle() {
    const circle = document.createElement('div');
    const size = random(50, 200);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    circle.style.position = 'absolute';
    circle.style.top = `${random(0, window.innerHeight - size)}px`;
    circle.style.left = `${random(0, window.innerWidth - size)}px`;
    return circle;
  }

  createRectangle() {
    const rectangle = document.createElement('div');
    const width = random(50, 200);
    const height = random(50, 200);
    rectangle.style.width = `${width}px`;
    rectangle.style.height = `${height}px`;
    rectangle.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    rectangle.style.position = 'absolute';
    rectangle.style.top = `${random(0, window.innerHeight - height)}px`;
    rectangle.style.left = `${random(0, window.innerWidth - width)}px`;
    return rectangle;
  }

  createTriangle() {
    const triangle = document.createElement('div');
    const size = random(50, 200);
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderStyle = 'solid';
    triangle.style.borderWidth = `0 ${size}px ${size}px 0`;
    triangle.style.borderColor = `transparent transparent rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}) transparent`;
    triangle.style.position = 'absolute';
    triangle.style.top = `${random(0, window.innerHeight - size)}px`;
    triangle.style.left = `${random(0, window.innerWidth - size)}px`;
    return triangle;
  }

  trigger() {
    const shapes = [this.createSquare, this.createCircle, this.createRectangle, this.createTriangle];
    const shape = shapes[random(0, shapes.length - 1)]();
    document.body.appendChild(shape);

    setTimeout(() => shape.remove(), 4000); 
  }
}