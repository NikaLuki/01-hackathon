import { Module } from "../core/module";

export class BackgroundModule extends Module {
  trigger() {
    setInterval(function () {
      const letters = "ABCDEF";
      let color = "#";
      for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 6)];
      }
      document.body.style.backgroundColor = color;
      return color;
    }, 4000);
  }
}
