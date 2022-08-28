import { Module } from '../core/module';

export class BackgroundModule extends Module {
  trigger() {
    const letters = 'ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    document.body.style.backgroundColor = color;
    let rgb = document.body.style.backgroundColor.match(/\d+/g);
    const createInputColor = () => {
      if (!document.querySelector('.form__range')) {
        const inputColor = document.createElement('input');
        inputColor.className = 'form__range';
        inputColor.type = 'range';
        inputColor.min = 0;
        inputColor.max = 255;
        inputColor.value = rgb[0];
        document.body.insertAdjacentElement('afterbegin', inputColor);
      } else {
        const inputColor = document.querySelector('.form__range');
        inputColor.value = rgb[0];
      }
    };
    createInputColor();

    const sliderChangeColor = document.querySelector('.form__range');

    sliderChangeColor.addEventListener('input', event => {
      rgb[0] = event.target.value;
      document.body.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]}, ${rgb[2]})`;
    });
  }
}
