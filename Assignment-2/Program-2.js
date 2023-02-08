//Program 2- Write a program to calculate the sum of 5 numbers

function sum(numbers) {
    let Sum_of_numbers = 0;
    for (let i = 0; i < numbers.length; i++) {
      Sum_of_numbers = Sum_of_numbers+numbers[i];
    }
    return Sum_of_numbers;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log("Sum of 5 numbers",sum(numbers));
  