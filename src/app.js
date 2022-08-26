import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';

const contextMenu = new ContextMenu('.menu');
const background = new BackgroundModule('test', 'test');
contextMenu.add(background, background2);
document.body.addEventListener('contextmenu', event => {
  event.preventDefault();
  contextMenu.open(event);
});
