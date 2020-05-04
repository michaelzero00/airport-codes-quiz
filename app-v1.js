// fetch the airports database array from airports.js 


// temp script to pull code from array and display it on the front end
  
// get the H1 we want to dispaly the IATA code in
var currentCode = document.getElementById("displayIATACode");

// choose a random IATA value from the array. 
var random = Math.round(Math.random() * airportCodes.length);
var randomIATACode = airportCodes[random]["iata"];

// set the H1 element to display the random IATA code from the array
document.getElementById("displayIATACode").textContent = randomIATACode

// get the You Guessed and Correct Answer 
var youGuessedField = document.getElementById("guessedAnswer");
var displayCorrectAnswerField = document.getElementById("displayCorrectAnswer");

// grab the user input
var answerButton = document.getElementById("submit");
answerButton.addEventListener('click', function(){
  // test user input against current answer and if correct set alert "you are right"

  // if (document.getElementById("userGuess").value.toLowerCase() === airportCodes[random]["city"].toLowerCase()){
  //   alert('you are right!')
  // } else {
  //   alert ('wrong sucker');
  // }
  console.log(document.getElementById("userGuess").value);
  console.log(airportCodes[random]["city"]);
  
  
  
  // set the You Guessed field
  youGuessedField.innerHTML(document.getElementById("userGuess").value) 
  // set the Correct Answer field
  displayCorrectAnswerField.innerHTML(airportCodes[random]["city"])
  
  
});
                              
                       