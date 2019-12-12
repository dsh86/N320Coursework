var soundButtons = document.getElementById("soundButtons");
var sounds = [

    "Chimes long",
    "Click clock loop",
    "Pop 10",
    "Puff",
    "Rustle 5"

];



var soundElements = [];
sounds.forEach((soundName, idx)=>{



    var newSound = new Audio( "sounds/" + soundName + ".mp3");
    soundElements.push(newSound);

    var newButton = document.createElement("button");
    newButton.innerHTML = soundName;
    newButton.setAttribute("data-sound-id", idx);
    soundButtons.appendChild(newButton);
    newButton.addEventListener("click", playSoundInArray);



})



function playSoundInArray(event){

    var soundIndex = Number( event.target.getAttribute("data-sound-id"));
    
    var selectedSound = soundElements[soundIndex];
    selectedSound.play();

}