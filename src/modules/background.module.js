import { Module } from '../core/module';
import { random, getRandomColor } from '../utils';
export class BackgroundModule extends Module {
  constructor() {
    super('background', 'Заменить цвет фона');
  }

  trigger() {
    document.body.style.backgroundColor = getRandomColor();
  }
}


