
import {Module} from '../core/module';
import {createDivFigure} from '../utils';
export class RandomFigure extends Module{
    trigger(){
       const modulseRandomFigure = document.querySelector('[data-type="random-figure"]');
       modulseRandomFigure.addEventListener('click', (event)=>{        
        createDivFigure(); // функция которая создает фигуру и удаляет через 3 секунды        
       })    
    }
}



