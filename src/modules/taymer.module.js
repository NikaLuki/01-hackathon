import { Module } from '../core/module';
import { getWindow } from '../utils';

export class TimerModule extends Module {
  trigger() {
    const form = document.createElement('form');
    form.className = 'forma';

    const input = document.createElement('input');
    input.autocomplete = 'off';
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'отправить';
    button.className = '';
    form.append(input);
    form.append(button);
    input.type = 'text';
    input.id = 'col';
    document.body.append(form);

    document.querySelector('button').onclick = function (event) {
      event.preventDefault();
      let time = document.querySelector('#col').value;
      let paragropth = document.createElement('div');
      paragropth.className = 'count';
      document.body.append(paragropth);
      form.remove();
      const itemId = setInterval(updateCountDown, 1000);
      function updateCountDown() {
        let minut = Math.floor(time / 60);
        let secund = Math.floor(time % 60);
        secund = secund < 10 ? '0' + secund : secund;
        minut = minut < 10 ? '0' + minut : minut;
        paragropth.innerHTML = `${minut}:${secund}`;
        time--;
        if (time < 0) {
          time = 0;
          paragropth.innerHTML = time;
          clearInterval(itemId);
          paragropth.remove();
          getWindow('Таймер окончен');
        }
      }
    };
  }
}
