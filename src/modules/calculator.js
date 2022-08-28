import {Module} from '../core/module'
const patternHTML = `<div class="calculator">
<div class="input"></div>

<div class="flex_number">
    <div class="num">1</div>
    <div class="num">2</div>
    <div class="num">3</div>
</div>
<div class="flex_number">
    <div class="num">4</div>
    <div class="num">5</div>
    <div class="num">6</div>
</div>
<div class="flex_number">
    <div class="num">7</div>
    <div class="num">8</div>
    <div class="num">9</div>
</div>      
<div class="flex_number">
    <div class="operand">-</div>
    <div class="num">0</div>
    <div class="operand">+</div>
</div>  
<div class="flex_number">
    <div class="operand">*</div>
    <div class="operand">/</div>
    <div class="num">.</div>              
</div>  
<div class="result_sum">=</div>
</div>`
export class Calculator extends Module {
    trigger(){
        const divCalculator = document.createElement('div')
        divCalculator.innerHTML = patternHTML
        document.body.append(divCalculator)
        const calculator = document.querySelector('.calculator')
        const allNum = document.querySelectorAll('.num')
        const input = document.querySelector('.input')
        const operand = document.querySelectorAll('.operand')
        const result = document.querySelector('.result_sum')
        setTimeout(() =>{
            calculator.style.opacity = '1'
        },100)
        let str = ''
        let arrSum = []
        allNum.forEach((item) =>{
            item.addEventListener('click', (event)=>{
                const {target} = event        
                str = str + target.innerText
                input.innerText = str 
                    
            })
        })
let strOperandTarget = ''
let sum = 0
    operand.forEach((item) =>{
        item.addEventListener('click', (event) =>{ 
            sum +=1              
            arrSum.push(Number(str))
            str = ''
            input.innerText = str   
            if(sum > 1){
                if(strOperandTarget === '+'){
                    arrSum = [arrSum[0] + arrSum[1]]                    
                }
                if(strOperandTarget === '-'){
                    arrSum = [arrSum[0] - arrSum[1]]
                }
                if(strOperandTarget === '*'){
                    arrSum = [arrSum[0] * arrSum[1]]
                }
                if(strOperandTarget === '/'){
                    arrSum = [arrSum[0] / arrSum[1]]
                }
            }  
            strOperandTarget = event.target.innerText
            // console.log(arrSum);
        })
    })
    result.addEventListener('click', (event) =>{
        arrSum.push(Number(str))    
            if(strOperandTarget === '+'){
                arrSum = [arrSum[0] + arrSum[1]]
            }
            if(strOperandTarget === '-'){
                arrSum = [arrSum[0] - arrSum[1]]
            }
            if(strOperandTarget === '*'){
                arrSum = [arrSum[0] * arrSum[1]]
            }
            if(strOperandTarget === '/'){
                arrSum = [arrSum[0] / arrSum[1]]
            }    
        input.innerText = arrSum
        str = Number(arrSum)
        arrSum = []
        console.log(input.innerText);
        sum = 0
    })
        console.log(divCalculator);
    }
}