{

    const powitanie = () => {
        console.log(" Hello World :) ");
    }
    powitanie();




    const form__button = document.querySelector(".form__button--js");
    let form_resultLottery = document.querySelector(".form_resultLottery--js");

    let Lottery = Math.floor(Math.random() * (9));
  



    form__button.addEventListener("click", () => {
        form_resultLottery.innerText = (`wynik losowania to:` +Lottery );
    });



}
