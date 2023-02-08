//Program 1- Write a program to calculate the average of 5 numbers.

function average(numbers){
    let total=0;
    for(let i=0;i<numbers.length;i++){
        total=total+numbers[i];
    }
    return total/numbers.length;
}


const numbers=[10,20,30,40,5];
console.log("Avergare of 5 numbers ", average(numbers));
