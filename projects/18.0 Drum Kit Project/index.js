let numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (let i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

     this.style.color = "white";

});

}

