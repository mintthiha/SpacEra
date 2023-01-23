/*This is an exact copy of the mode.js in the template folder. I just changed the path, because the index.html path is slightly different from others*/

let mode = document.getElementById("mode");
let icon = document.getElementById("toggleDark");
let title = document.getElementById("title");
let counter = 0;

icon.addEventListener("click", function(){
    if(counter%2 === 0){
        mode.href = "styles/lightmode.css";
        icon.innerHTML = "dark_mode";
        counter++;
    }

    else{
        mode.href = "styles/darkmode.css";
        icon.innerHTML = "light_mode";
        counter++;
    }
    
})