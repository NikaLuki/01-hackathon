import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import {TimerModule} from './modules/taymer.module'

const contextMenu = new ContextMenu('.menu');
const background = new BackgroundModule('test', 'test');
const taymer = new TimerModule('text', 'таймер')
contextMenu.add(background);
contextMenu.add(taymer)
document.body.addEventListener('contextmenu', event => {
  event.preventDefault();
  contextMenu.open(event);
  
});
       

      