
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
let fizzBuzz = [];
const fizzBuzzResult = document.getElementById('fizzBuzzResult');
const explanationBtn = document.querySelector('button');
const fizzBuzzExplanation = document.getElementById('fizzBuzzExplanation');

for (let i = 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
         fizzBuzz.push("FizzBuzz");
    } else if(i % 3 === 0) {
         fizzBuzz.push("Fizz");
    } else if(i % 5 === 0) {
     fizzBuzz.push("Buzz");
    } else {
     fizzBuzz.push(i)
    }
};

console.log(fizzBuzz);
fizzBuzzResult.textContent = fizzBuzz;

function showExplanation() {
  return  fizzBuzzExplanation.textContent = "If number is divisible by 3, print Fizz. If number is divisible by 5, print Buzz. If it is divisible by both, print FizzBuzz. "
}

explanationBtn.addEventListener('click', showExplanation)