import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  add(...modules) {
    for (const module of modules) {
      this.el.insertAdjacentHTML('beforeend', module.toHTML());
      module.addEventListener('click', module.trigger());
    }
  }
  open(event) {
    const parentWidth = this.el.parentNode.clientWidth;
    const parentHeight = this.el.parentNode.clientHeight;
    if (this.el.hasChildNodes()) {
      if (event.clientX + this.el.clientWidth > parentWidth)
        this.el.style.left = `${parentWidth - this.el.clientWidth}px`;
      else this.el.style.left = `${event.clientX}px`;
      if (event.clientY + this.el.clientHeight > parentHeight)
        this.el.style.top = `${parentHeight - this.el.clientHeight}px`;
      else this.el.style.top = `${event.clientY}px`;

      this.el.classList.add('open');
    }
  }
  close() {
    this.el.classList.remove('open');
  }
}
