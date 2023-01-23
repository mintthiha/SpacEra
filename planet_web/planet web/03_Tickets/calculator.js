function calculatePrice(){
    let button = document.getElementById("button"); //Defining the button.
    let text = document.getElementById("output");   //The final output of the price.
    let pack = document.getElementById("pack"); // All Inclusive Pack "Select Input".
    let ticketType = document.getElementById("ticket-type"); // Regular, Premium, Deluxe.
    let earth = 22837;  //Initial price for earth
    let moon = 15000;   //Initial price for moon
    let mars = 14769;   //Initial price for mars
    let jupiter = 74089;//Initial price for jupiter

    /*(Check for the start & end planets)****************************************************************************************/
    button.addEventListener("click", function() {
        let startPlanet = document.getElementById("start-planet");  
        let endPlanet = document.getElementById("end-planet");
        let price = 0;
        if(startPlanet.value === "Earth" && endPlanet.value === "Moon" || startPlanet.value === "Moon" && endPlanet.value === "Earth"){
            price = Math.abs(earth - moon)+50000;
        }
        if(startPlanet.value === "Earth" && endPlanet.value === "Mars" || startPlanet.value === "Mars" && endPlanet.value === "Earth"){
            price = Math.abs(earth - mars)+50000;
        }
        if(startPlanet.value === "Earth" && endPlanet.value === "Jupiter" || startPlanet.value === "Jupiter" && endPlanet.value === "Earth"){
            price = Math.abs(earth - jupiter)+50000;
        }
        if(startPlanet.value === "Mars" && endPlanet.value === "Jupiter" || startPlanet.value === "Jupiter" && endPlanet.value === "Mars"){
            price = Math.abs(mars - jupiter)+50000;
        }
        if(startPlanet.value === "Mars" && endPlanet.value === "Moon" || startPlanet.value === "Moon" && endPlanet.value === "Mars"){
            price = Math.abs(mars - moon)+50000;
        }
        if(startPlanet.value === "Jupiter" && endPlanet.value === "Moon" || startPlanet.value === "Moon" && endPlanet.value === "Jupiter"){
            price = Math.abs(jupiter - moon)+50000;
        }
        
        /*The type of ticket check: Regular = 0, Premium = +$10k, Deluxe = +$15k************************************************************************************************************************/

        if(ticketType.value === "Premium"){
            price += 10000;
        }
        if(ticketType.value === "Deluxe"){
            price += 15000;
        }

        /*The All Inclusive Pack check: Yes = +$7500k************************************************************************************************************************/

        if(pack.value === "yesPack"){
            price += 7500;
        }

        /*Calculating baggage (weight) and the ticket amount:************************************************************************************************************************/

        let ticketAmount = document.getElementById("ticket-amount").valueAsNumber;
        let weight = document.getElementById("weight").valueAsNumber;
        weight = weight * 1000;
        price = (price * ticketAmount) + weight;

        text.innerText = "Your ticket price will be: " + price + "$";
    });
}

calculatePrice();
