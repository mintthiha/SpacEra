
function slider(){
    let canada = document.getElementById("yes");
    let other = document.getElementById("no");
    let hidden = document.getElementById("hidden");
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let note = document.getElementById("note");
    let country = document.getElementById("country");

    name.addEventListener("change", function(event){
        note.innerText = "Nice to meet you " + name.value + "!";
    });

    age.addEventListener("change", function(event){
        note.innerText = age.value + " years old is the best time to live!";
    });

    canada.addEventListener("click", function(event){
        hidden.style.display = "none";
    });
    other.addEventListener("click", function(event){
        hidden.style.display = "flex";
    });

    country.addEventListener("change", function(event){
        if (country.value === "Canada"){
            note.innerText = "???";
        }
        else{
            note.innerText = "Great Job! You almost finished!";
        }
    });
}

slider();
