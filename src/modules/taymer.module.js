import {Module} from '../core/module'

export class TimerModule extends Module {
    trigger(){
       
          const itemId = setInterval(updateCountDown, 1000)
          let time = Number(prompt('задайте время в секундах'))
        let paragropth = document.createElement('div')
        document.body.append(paragropth)
        
        function  updateCountDown(){
          time = time < 10 ? '0' + time: time;
        paragropth.innerHTML= time
          time--;
          if(time < 0){
            time = 0
            paragropth.innerHTML = 'Таймер окончен'
          }
          setTimeout(()=>{
            clearInterval(itemId)
            if(paragropth.innerHTML === 'Таймер окончен'){
                paragropth.remove()
            }
          },2000)
        }
       
      
            
        
        }
        
    }
    