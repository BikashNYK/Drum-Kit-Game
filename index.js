let totalDrumButtons = document.querySelectorAll(".drum").length;

// for button click
let i = 0;
while (i < totalDrumButtons) {
    document.querySelectorAll(".drum")[i].addEventListener("click", onClick);
    function onClick() {

        // this keyword gives the value of the clicked element
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        // add a class to indicate the button has been clicked
        this.classList.add("clicked");

        // remove the class after a short time to revert the style back to normal
        setTimeout(() => {
            this.classList.remove("clicked");
        }, 100);
    }
    i++;
}

// for keypress
document.addEventListener("keypress", function (event) {
    let key = event.key;
    makeSound(key);

    // Add the 'clicked' class to the button element that corresponds to the key press
    let button = document.querySelector(`.${key}`);
    button.classList.add("playing");

    // Remove the class after a short time to revert the style back to normal
    setTimeout(() => {
        button.classList.remove("playing");
    }, 100);
});


function makeSound(key) {
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
