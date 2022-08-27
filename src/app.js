import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { RandomFigure } from './modules/random-figure'

const contextMenu = new ContextMenu('.menu');
const background = new BackgroundModule('test', 'test');
const randomFrigure = new RandomFigure('random-figure', 'Случайная фигура')
contextMenu.add(background);
contextMenu.add(randomFrigure);
document.body.addEventListener('contextmenu', event => {
  event.preventDefault();
  contextMenu.open(event);
});


