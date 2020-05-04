var airportCodes = [
  {
    iata: "LHR",
    name: "London Heathrow",
    city: "London",
    country: "United Kingdom"
  },
  {
    iata: "AKL",
    name: "Auckland International Airport",
    city: "Auckland",
    country: "New Zealand"
  },
  {
    iata: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
    country: "United States"
  },
  {
    iata: "BOG",
    name: "El Dorado Luis Carlos Galan Sarmiento International Airport",
    city: "Bogota",
    country: "Colombia"
  },
  {
    iata: "NRT",
    name: "Narita International Airport",
    city: "Tokyo",
    country: "Japan"
  },
  {
    iata: "SYD",
    name: "Sydney International Airport",
    city: "Sydney",
    country: "Australia"
  },
  {
    iata: "MNL",
    name: "Ninoy Aquino International Airport",
    city: "Manila",
    country: "Philippines"
  },
  { iata: "SVQ", name: "Seville Airport", city: "Seville", country: "Spain" },
  {
    iata: "CAN",
    name: "Guangzhou Baiyun International Airport",
    city: "Guangzhou",
    country: "China"
  },
  {
    iata: "ORD",
    name: "O'Hare International Airport",
    city: "Chicago",
    country: "United States"
  },
  {
    iata: "YYZ",
    name: "OToronto Pearson International Airport",
    city: "Toronto",
    country: "Canada"
  },
  {
    iata: "EZE",
    name: "Ministro Pistarini International Airport",
    city: "Buenos Aires",
    country: "Argentina"
  },
  {
    iata: "SJJ",
    name: "Sarajevo International Airport",
    city: "Sarajevo",
    country: "Bosnia and Herzegovina"
  },
  {
    iata: "DOH",
    name: "Hamad International Airport",
    city: "Doha",
    country: "Qatar"
  },
  {
    iata: "KEF",
    name: "Keflavík International Airport",
    city: "Reykjavík",
    country: "Iceland"
  }
];

// temp script to pull code from array and display it on the front end

// get the H1 we want to dispaly the IATA code in
var currentCode = document.getElementById("displayIATACode");

// call function to generate a new question
generateNewQuestion()


// get the You Guessed and Correct Answer
var youGuessedField = document.getElementById("guessedAnswer");
var displayCorrectAnswerField = document.getElementById("displayCorrectAnswer");

$(document).ready(function() {
  $(document).on("submit", "#my-form", function() {
    // test user input against current answer and if correct set alert "you are right"
    // i.event.preventDefault();
    var random = generateNewQuestion();
    if (
      document.getElementById("userGuess").value.toLowerCase() ===
      currentAnswer.toLowerCase()
    ) {
      alert("you are right!");
    } else {
      alert("wrong sucker");
    }
    // console.log(document.getElementById("userGuess").value);
    // console.log(airportCodes[random]["city"]);
    
    return false;
  });
});

function generateNewQuestion() {
  // choose a random value equal to the length of the IATA array
  var random = Math.round(Math.random() * airportCodes.length);
  // use this random value to pull an IATA code from the array
  var randomIATACode = airportCodes[random]["iata"];
  // set the H1 element to display the random IATA code from the array
  document.getElementById("displayIATACode").textContent = randomIATACode;
  // export a string of the location based on this code.
  var currentAnswer = airportCodes[random]["city"]
  // export the string value of the airport location
  console.log("Current value displayed is " + currentAnswer)
  return currentAnswer;
}
