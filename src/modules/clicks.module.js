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

          const popup = document.createElement('div')
          const popupBody = document.createElement('div')
          const popupContent = document.createElement('div')
          const popupText = document.createElement('div')
          const popupClose = document.createElement('span')
          popupClose.classList.add('popup-close')
          popupText.classList.add('popup-text')
          popupContent.classList.add('popup-content')
          popupBody.classList.add('popup-body')
          popup.classList.add('popup')

          popup.append(popupBody)
          popupBody.append(popupContent)
          popupContent.append(popupClose,popupText)
          popupClose.innerText = ('X')
          
          
          
         

          setTimeout(()=>{
            document.body.append(popup)
            popup.style.visibility = 'visible'
            popup.style.opacity = 1
            popupClose.onclick = function(){
              popup.style.visibility = 'hidden'
              popup.style.opacity = 0
            }
            btn.removeEventListener('click',counter)
            btn.removeEventListener('dblclick',dobleCounter)
            popupText.innerText = (`Количество одинарных кликов: ${clickCount}
            Количество двойных кликов: ${dobleClick}
              `)
              
          },3000)
        }
}