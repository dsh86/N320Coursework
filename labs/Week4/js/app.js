var theplace = document.querySelector("#theplace");
var cardTemplate = document.querySelector("#cardTemplate");

var suits = [ "", ""];
var values = [ " ", "", ""];
var i = 0;

    for(i=0; i<6; i++) {


let newCard = document.createElement("div");
    newCard.classList.add("card");

    newCard.addEventListener("mouseover", onCardOver);
    newCard.addEventListener("mouseout", onCardOut);
    newCard.addEventListener("mousedown", onCardDown);

    theplace.appendChild(newCard);

    }

function onCardOver(event) {
    event.target.style.animationDelay = "0s";
    event.target.classList.add("cardOver");
    event.target.classList.remove("cardOut");

 
}

function onCardOut(event) {
    event.target.classList.add("cardOut");
    event.target.classList.remove("cardOver");

  
}

function onCardDown(event) {
    event.target.classList.add("cardDown");


}