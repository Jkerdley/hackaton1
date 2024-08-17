import { Menu } from './core/menu';
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.menuItems = [];
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.open(event.clientX, event.clientY);
    });
  }
  
  open(x, y) {
    if (this.menuItems.length > 0) {
      this.el.style.top = `${y}px`;
      this.el.style.left = `${x}px`;
      this.el.classList.add('open');
    }
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.menuItems.push(module);
    this.el.innerHTML = this.menuItems.map(item => item.toHTML()).join('');
    this.menuItems.forEach((item) => {
      const menuItem = this.el.querySelector(`[data-type="${item.type}"]`);
      if (menuItem) {
        menuItem.addEventListener('click', () => {
          item.trigger();
          this.close();
        });
      } else {
        console.error(`Menu item not found for module: ${item.type}`);
      }
    });
  }
}
