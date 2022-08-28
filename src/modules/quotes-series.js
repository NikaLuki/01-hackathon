import {Module} from '../core/module'
import {random} from '../utils'

export class QuotesSeries extends Module{
    trigger(){
        const quotesURL = `https://www.breakingbadapi.com/api/quotes`
        const fetchURL = fetch(quotesURL)
        fetchURL
            .then((response) =>{
                if(!response.ok){
                    throw new Error('ошибка запроса')
                }
                if(quotesURL !== `https://www.breakingbadapi.com/api/quotes`){
                    throw new Error('Ошибка в названии URL')
                }
                return response.json()
            })    
            .then((result) =>{
                const randomQoutes = result[random(0, result.length -1)]
                alert(`Автор: ${randomQoutes.author}. Цитата: ${randomQoutes.quote}. Сериал: ${randomQoutes.series}`)                
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}