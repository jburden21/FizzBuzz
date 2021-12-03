//prompts for user input and stores the input into answer
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

//i++ increments by 1 until i is greater than answer
for (let i = 1; i <= answer; i++) {

  //using the % operator to divide the current number by 3 && 5 and display FizzBuzz if it doesn't have a remainder
  if (i % 3 === 0 && i % 5 === 0) { 
    console.log("FizzBuzz");
  } //using the % operator to divide the current number by 3 and display Fizz if it doesn't have a remainder
  else if (i % 3 === 0){
    console.log("fizz");
  }//using the % operator to divide the current number by 5 and display Buzz if it doesn't have a remainder
  else if (i % 5 === 0){
    console.log("buzz")
  }
   else {
    console.log(i);
  }
}