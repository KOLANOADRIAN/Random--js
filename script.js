{

    const powitanie = () => {
        console.log(" Hello World :) ");
    };
    // pobieranie danych z input


    const wynik = () => {
        const input1 = document.querySelector(".input1");
        const input2 = document.querySelector(".input2");
        const input3 = document.querySelector(".input3");
        const input4 = document.querySelector(".input4");
        const input5 = document.querySelector(".input5");
        const input6 = document.querySelector(".input6");

        const you_input1 = input1.value;
        const you_input2 = input2.value;
        const you_input3 = input3.value;
        const you_input4 = input4.value;
        const you_input5 = input5.value;
        const you_input6 = input6.value;

        const Lottery = Math.floor(Math.random() * (49));
        const Lottery1 = Math.floor(Math.random() * (49));
        const Lottery2 = Math.floor(Math.random() * (49));
        const Lottery3 = Math.floor(Math.random() * (49));
        const Lottery4 = Math.floor(Math.random() * (49));
        const Lottery5 = Math.floor(Math.random() * (49));

        console.log(you_input1)
        console.log(Lottery)
        if (you_input1 === Lottery) {
            console.log("trafiłeś pierwszą cyfrę")
        } else {
            console.log("Nie trafiłeś pierwszej cyfrę")
        }


        // you_input1 === Lottery ? console.log("trafiłeś") : console.log("ZONK");

        const form_resultLottery = document.querySelector(".form_resultLottery--js");

        form_resultLottery.innerHTML = (`Twoje cyfry to: 
        ${you_input1} - 
        ${you_input2} - 
        ${you_input3} - 
        ${you_input4} - 
        ${you_input5} - 
        ${you_input6}
        <br> 
        WYLOSOWANO: 
        ${Lottery} - 
        ${Lottery1} - 
        ${Lottery2} - 
        ${Lottery3} - 
        ${Lottery4} - 
        ${Lottery5}`
        );


      

    };


    init = () => {
        const form__button = document.querySelector(".form__button--js");
        form__button.addEventListener("click", wynik);

        powitanie();
    };
    init();


    
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
