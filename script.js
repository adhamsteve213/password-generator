//Dice Roller Program
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Example usage:
const diceRoll = rollDice(6); // Roll a six-sided die
console.log("You rolled:", diceRoll);