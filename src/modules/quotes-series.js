import { Module } from "../core/module";
import { random } from "../utils";
import { getWindow } from "../utils";
export class QuotesSeries extends Module {
    trigger() {
        const quotesURL = `https://www.breakingbadapi.com/api/quotes`;
        const fetchURL = fetch(quotesURL);
        fetchURL
            .then((response) => {
                if (!response.ok) {
                    throw new Error("ошибка запроса");
                }
                if (quotesURL !== `https://www.breakingbadapi.com/api/quotes`) {
                    throw new Error("Ошибка в названии URL");
                }
                return response.json();
            })
            .then((result) => {
                const randomQoutes = result[random(0, result.length - 1)];
                const infoSeries = document.createElement("div");
                const author = document.createElement("div");
                const quote = document.createElement("div");
                infoSeries.innerText = `Название Сериала:  ${randomQoutes.series}`;
                author.innerText = `Автор цитаты:  ${randomQoutes.author}`;
                quote.innerText = `Цитата:  ${randomQoutes.quote}`;

                getWindow(); // создание модельного окна
                const divWichOnePush = document.querySelector(".popup-text");
                divWichOnePush.innerText = "";
                divWichOnePush.append(infoSeries, author, quote);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
