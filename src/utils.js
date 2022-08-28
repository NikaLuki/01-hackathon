export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[random(0, letters.length -1)];
  }
  return color;
}


export function getWindow(text){
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

          document.body.append(popup)
            popup.style.visibility = 'visible'
            popup.style.opacity = 1
            popupClose.onclick = function(){
              popup.style.visibility = 'hidden'
              popup.style.opacity = 0
            }
            popupText.innerText = text
}