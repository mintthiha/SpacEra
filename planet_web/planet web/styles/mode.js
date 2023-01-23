/*In this JavaScript file, we are using counter of the even and odd clicks in order to change the dark and light mode*/

let mode = document.getElementById("mode");
let icon = document.getElementById("toggleDark");
let title = document.getElementById("title");
let counter = 0;

icon.addEventListener("click", function(){
    if(counter%2 === 0){
        mode.href = "../styles/lightmode.css";
        icon.innerHTML = "dark_mode";
        counter++;
    }

    else{
        mode.href = "../styles/darkmode.css";
        icon.innerHTML = "light_mode";
        counter++;
    }
    
})