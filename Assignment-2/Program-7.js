/*Program 7- Create an array of length 5 and store below numbers 
       1,11,111,222,555 . Write a program to calculate the average of numbers.
*/
const numbers = [1, 11, 111, 222, 555];

function average(numbers) {
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    avg = avg+numbers[i];
  }
  return avg / numbers.length;
}

console.log("Average is ",average(numbers));

