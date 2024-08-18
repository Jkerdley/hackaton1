import { Menu } from "./core/menu";
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.menuItems = [];

    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.open(event.clientX, event.clientY);
    });

    this.el.addEventListener("click", (event) => {
      const item = event.target.closest(".menu-item");
      if (item) {
        this.menuItems
          .find((menuItem) => menuItem.type === item.dataset.type)
          .trigger();
        this.close();
      }
    });
  }

  open(x, y) {
    if (this.menuItems.length > 0) {
      this.el.classList.add("open");

      if (window.innerHeight - this.el.offsetHeight < y) {
        this.el.style.top = `${y - this.el.offsetHeight}px `;
      } else {
        this.el.style.top = `${y}px`;
      }

      if (window.innerWidth - this.el.offsetWidth < x) {
        this.el.style.left = `${x - this.el.offsetWidth}px `;
      } else {
        this.el.style.left = `${x}px`;
      }
    }
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.menuItems.push(module);
    this.el.insertAdjacentHTML("beforeend", module.toHTML());
  }
}
