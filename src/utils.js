export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// рандомный цвет
export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// див случайных размеров и цвета
export const createDivFigure = (callbeck) =>{
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
      divFigure.remove()
  },3000);  
}