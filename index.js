const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const code = franc(input);
const guess = langs.where("3", code);
if (guess) console.log(guess.name.green);
else
  console.log("Could not match a language. Please provide a larger sample".red);
