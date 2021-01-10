{

    const powitanie = () => {
        console.log(" Hello World :) ");
    };

    const wynik = () => {

        const form_resultLottery = document.querySelector(".form_resultLottery--js");

        let Lottery = Math.floor(Math.random() * (10));
        let Lottery1 = Math.floor(Math.random() * (10));
        let Lottery2 = Math.floor(Math.random() * (10));
        let Lottery3 = Math.floor(Math.random() * (10));
        let Lottery4 = Math.floor(Math.random() * (10));
        let Lottery5 = Math.floor(Math.random() * (10));
        form_resultLottery.innerText = (`WYLOSOWANO: ${Lottery} - ${Lottery1} - ${Lottery2} - ${Lottery3} - ${Lottery4} - ${Lottery5}`);
        // TU DODAĆ JESZCZE JEDNĄ ZMIENNA Z SAMYMI CYFRAMI WYLOSOWANYMI I PRZESIAĆ JE PRZEZ PAŻYSTE LUB NIE Parzyste
    };


    init = () => {
        const form__button = document.querySelector(".form__button--js");
        form__button.addEventListener("click", wynik);
        
        powitanie();
    };
    init();
//    pomysł na puźniej
// funkcja sprawdza czy liczba jest parzysta
// 07.04  min 22
// const numbers = [1, 2, ,5, 7];

// // const is Even = number => {
// //     if (number % 2 === 0) {
// //         return true;
// //     }
// //     return false;
// // }

// // zapis prostszy 
// const isEven = number => number % 2 === 0;
// const isAnyNumberEven = numbers.some(isEven);
// const isEveryNumberEven = numbers.every(isEven);

// lub i

// wyciągnięcie minimalenej liczby z listy
// const numbers = [4, 7, 1, 9, 2, 5]
// const min = Math.min(...numbers)
};
