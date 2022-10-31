
let totalDrumButtons = document.querySelectorAll(".drum").length;

// for (let index = 0; index < totalDrumButtons; index++) {
//     document.querySelectorAll("button")[index].addEventListener("click",onClick);
//     function onClick(){
//         alert('I got clicked');
//     }
// }

// for button press
let i = 0;
while (i < totalDrumButtons) {
    document.querySelectorAll("button")[i].addEventListener("click", onClick);
    function onClick() {

        // this keyword give this value
        // if this.innerHTML it means it give the keyword which clicked
        // console.log(this.innerHTML);
        // this.style.color = "White";

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        }
    i++;
    }
    

    // for keypress
    document.addEventListener("keypress",function(event){
        console.log(event);
        makeSound(event.key);
    })

function makeSound(key){

    switch (key) {
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
}
}




// var audio=new Audio('sounds/crash.mp3');
// audio.play();