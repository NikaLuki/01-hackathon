import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  add(...modules) {
    for (const module of modules) {
      this.el.insertAdjacentHTML('beforeend', module.toHTML());
    }
  }
  open(event) {
    if (this.el.hasChildNodes()) {
      this.el.style.top = `${event.clientY}px`;
      this.el.style.left = `${event.clientX}px`;
      this.el.classList.add('open');
    }
  }
  close() {
    this.el.classList.remove('open');
  }
}
