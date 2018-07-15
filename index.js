// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  const free = "This one is on me!"
  if (someNumber <= 400) {
    return free
  }
  else if (someNumber > 2500) {
    return "No can do."
  }
  return "I will gladly take your thirty bucks."
}


function ternaryCheckCity(city) {
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
