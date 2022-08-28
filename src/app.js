import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { RandomFigure } from "./modules/random-figure";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/taymer.module";
import { QuotesSeries } from "./modules/quotes-series";
import { Calculator } from "./modules/calculator";

const contextMenu = new ContextMenu(".menu");
const background = new BackgroundModule("background", "Изменить цвет");
const randomFrigure = new RandomFigure("random-figure", "Случайная фигура");
const createCountClick = new ClicksModule(
    "createCountClick",
    "Подсчет кол-ва кликов за 3 секунды"
);
const timerModule = new TimerModule("таймер", "таймер");
const quotesSeries = new QuotesSeries("quotes", "Цитата из сериала");
const calculator = new Calculator("calculator", "Калькулятор");
contextMenu.add(createCountClick);
contextMenu.add(background);
contextMenu.add(randomFrigure);
contextMenu.add(timerModule);
contextMenu.add(quotesSeries);
contextMenu.add(calculator);

document.body.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    contextMenu.open(event);
});
