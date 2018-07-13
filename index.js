// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  //everything I want my function to do I put inside these curly braces
  //in this example, lets say I want my function, addFive, to add 5 to any number I pass in (someNumber), but only IF the number is greater than zero
  const free = "This one is on me!"
  //at the end, if I want my function to return something, I need to state it:
  if (someNumber <= 400) {
    return free
  }
  else if (someNumber > 2500) {
    return "No can do."
  }
  return 'I will gladly take your thirty bucks.'
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch (tip) {
  case "generous":
    return 'Thank you so much.'
  case 'not as generous':
    return "Thank you."
  default:
    return "Bye."
  }
}
