import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import {ClicksModule} from './modules/clicks.module';

const contextMenu = new ContextMenu('.menu');
const background = new BackgroundModule('test', 'test');
const clickModuleText = new ClicksModule('clickModule', 'Подсчет кликов за 3 секунды')
contextMenu.add(background);
contextMenu.add(clickModuleText);
document.body.addEventListener('contextmenu', event => {
  event.preventDefault();
  contextMenu.open(event);
});








