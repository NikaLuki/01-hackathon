
import {Module} from '../core/module';
import {random} from '../utils';
import {getRandomColor} from '../utils';

export class RandomFigure extends Module{
    trigger(){
        createDivFigure();  
    }
}
// функция которая создает див
const createDivFigure = () =>{
    const divFigure = document.createElement('div');
    divFigure.classList.add('figure');
    divFigure.style.width = `${random(100, 200)}px`;
    divFigure.style.height = `${random(100, 200)}px`;
    divFigure.style.borderRadius = `${random(0, 100)}%`;
    divFigure.style.position = `absolute`;
    divFigure.style.top = `${random(0, 80)}vh`;
    divFigure.style.left = `${random(0, 100)}vh`;
    divFigure.style.background = `${getRandomColor()}`;
    
    document.body.append(divFigure);    
    setTimeout(()=>{
        divFigure.remove();
    },3000);  
  }



