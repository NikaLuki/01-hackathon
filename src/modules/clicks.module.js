import {Module} from '../core/module'

export class ClicksModule extends Module {
    trigger(){
        const btn = document.body
        let clickCount = 0
        let dobleClick = 0
        
        function counter(){
          clickCount++
        }
        
        function dobleCounter(){
          dobleClick++
        }
        
         
          btn.addEventListener('click', counter)
          btn.addEventListener('dblclick',dobleCounter)
        
          setTimeout(()=>{
            btn.removeEventListener('click',counter)
            btn.removeEventListener('dblclick',dobleCounter)
            alert(`Количество одинарных кликов: ${clickCount}
            Количество двойных кликов: ${dobleClick}
            `)
          },3000)
        }
}