function scuberGreetingForFeet(number) {
  // gives customers a free sample if the ride is less than or equal to 400 feet
  if (number <= 400) {
    return "This one is on me!";
  }
  // charges 20 dollars for a distance between 400 and 2000 feet
  else if (number > 400 && number <= 2000) {
    return "That will be twenty bucks.";
  }
  // charges 30 dollars for a distance over 2000 feet
  else if (number > 2000 && number <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  // does not allow rides over 2500 feet
  else if (number > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // returns "Ok, sounds good." when the city is NYC
  //should return "No go." if the destination city is not NYC
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // should return "Thank you so much." if the tip is generous
  // should return "Thank you." if the tip is not as generous
  // should return "Bye." if anything else
  switch (tip) {
    case "generous": {
      return "Thank you so much.";
    }
    case "not as generous": {
      return "Thank you.";
    }
    default: {
      return "Bye.";
    }
  }
}
