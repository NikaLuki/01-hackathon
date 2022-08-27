import {Module} from '../core/module'

export class TimerModule extends Module {
    trigger(){
        const text = document.querySelector(`[data-type ="text"]`)
        text.addEventListener('click', event=>{
          
          
          setInterval(updateCountDown, 1000)
          let time = Number(prompt('задайте время в секундах'))
        let paragropth = document.querySelector('#count')
        
        function updateCountDown(){
          time = time < 10 ? '0' + time: time;
        paragropth.innerHTML= time
          time--;
          if(time < 0){
            time = 0
            paragropth.innerHTML = 'Таймер окончен'
          }
        }
       
        })
            
        
        }
    }
