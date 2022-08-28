import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { RandomFigure } from './modules/random-figure'
import { ClicksModule } from './modules/clicks.module'
import { TimerModule } from './modules/taymer.module';

const contextMenu = new ContextMenu('.menu');
const background = new BackgroundModule('test', 'test');
const randomFrigure = new RandomFigure('random-figure', 'Случайная фигура')
const createCountClick = new ClicksModule('createCountClick', 'Подсчет кол-ва кликов за 3 секунды')
const timerModule = new TimerModule('таймер','таймер')
contextMenu.add(createCountClick);
contextMenu.add(background);
contextMenu.add(randomFrigure);
contextMenu.add(timerModule)
document.body.addEventListener('contextmenu', event => {
  event.preventDefault();
  contextMenu.open(event);
});


