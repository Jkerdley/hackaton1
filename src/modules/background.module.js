import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  constructor() {
    super('background', 'Заменить цвет фона');
  }

  trigger() {
    const randomColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
		console.log(randomColor)
    document.body.style.backgroundColor = randomColor;
  }
}


