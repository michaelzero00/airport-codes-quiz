var airportCodes = [{iata: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom"}, 
                    {iata: "AKL", name: "Auckland International Airport", city: "Auckland", country: "New Zealand"},
                    {iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States"},
                    {iata: "BOG", name: "El Dorado Luis Carlos Galan Sarmiento International Airport", 
                         city: "Bogota", country: "Colombia"},
                    {iata: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan"}]


// temp script to pull code from array and display it on the front end
  
//grab the H1 we want to dispaly the IATA code in
var currentCode = document.getElementById("displayIATACode");

// choose a random IATA value from the array. 
var random = Math.round(Math.random() * airportCodes.length);

// set the H1 element to display the random IATA code from the array
document.getElementById("displayIATACode").textContent = airportCodes[random]["iata"]

// 

// grab the user input
var answerButton = document.getElementById("submit");
answerButton.addEventListener("submit", function(){
  alert('button clicked');
}