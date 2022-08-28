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

          const createModalWindow = document.createElement('div')
          createModalWindow.classList.add('modal')
          const createSecondSectionWindow = document.createElement('div')
          createSecondSectionWindow.classList.add('modal-content')
          const createClosestButton = document.createElement('span')
          createClosestButton.classList.add('close')
          createClosestButton.innerText = ('x')
          const createTitleContent  = document.createElement('p')
          createTitleContent.classList.add('title-content')
          createModalWindow.append(createSecondSectionWindow)
          createSecondSectionWindow.append(createClosestButton)
          createSecondSectionWindow.append(createTitleContent)
          
          
          
            
         

          setTimeout(()=>{
            document.body.append(createModalWindow)
            createClosestButton.onclick = function(){
              createModalWindow.style.display = 'none'
            }
            btn.removeEventListener('click',counter)
            btn.removeEventListener('dblclick',dobleCounter)
            createTitleContent.innerText = (`Количество одинарных кликов: ${clickCount}
            Количество двойных кликов: ${dobleClick}
              `)
              
          },3000)
        }
}