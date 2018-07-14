let someValue;

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!"
  } else if (someValue > 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500) {
    return 'No can do.'
  }
}

let destination;

function ternaryCheckCity(destination) {
  if (destination == "NYC"){
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}


let tip;

function switchOnCharmFromTip(tip) {
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
    break;
    case 'not as generous':
      return 'Thank you.'
    break;
    default:
      return 'Bye.'
    break;
  }
}
