import { Module } from '../core/module';
import { random } from '../utils';
export class HeadingModule extends Module {
  constructor() {
    super('heading', 'Случайный Заголовок');
  }

  trigger() {
     const existingContainer = document.querySelector('.heading-container');
    if (existingContainer) {
      existingContainer.remove();
    }

    const variants = ['h1', 'h2', 'h3', 'h4', 'h5'];
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Введите Ваш заголовок';
    inputField.className = 'heading-input';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.className = 'heading-close-button';
    closeButton.role = 'button';

		const container = document.createElement('div');
    container.className = 'heading-container';
    container.appendChild(inputField);
    container.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
      inputField.style.display = 'none';
      closeButton.style.display = 'none';
    });

    inputField.addEventListener('input', (event) => {
      const userInput = event.target.value;
      if (userInput) {
        const randomIndex = random(0, variants.length - 1);
        const heading = document.createElement(variants[randomIndex]);
        heading.textContent = userInput;

        const size = random(50, 200);
        heading.style.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        heading.style.position = 'absolute';
        heading.style.top = `${random(0, window.innerHeight - size)}px`;
        heading.style.left = `${random(0, window.innerWidth - size)}px`;
        document.body.appendChild(heading);

        setTimeout(() => heading.remove(), 3000); 
      }
    });
    document.body.appendChild(container);
    inputField.focus();
  }
}
