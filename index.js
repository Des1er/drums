

var nums = document.querySelectorAll(".drum").length;

for( var i = 0; i < nums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var inh = this.innerHTML;
       
        msound(inh);
        animation(inh);
    });
    
}

document.addEventListener("keydown", (e) =>{
    msound(e.key);
    animation(e.key);
});

function msound (inh){
    switch (inh){
        case "q":
            var t1 = new Audio("sounds/crash.mp3");
            t1.play();
            break;
        case "w":
            var t2 = new Audio("sounds/kick-bass.mp3");
            t2.play();
            break;
        case "e":
            var t3 = new Audio("sounds/snare.mp3");
            t3.play();
            break;
        case "r":
            var t4 = new Audio("sounds/tom-1.mp3");
            t4.play();
            break;
        case "t":
            var t5 = new Audio("sounds/tom-2.mp3");
            t5.play();
            break;
        case "y":
            var t6 = new Audio("sounds/tom-3.mp3");
            t6.play();
            break;
        case "u":
            var t7 = new Audio("sounds/tom-4.mp3");
            t7.play();
            break;

        default: console.log("error");
    }
}

function animation (curKey){
    var ak = document.querySelector("." + curKey);

    ak.classList.add("pressed");

    setTimeout(() =>{
        ak.classList.remove("pressed");
    }, 100);
}