//Program 5- Write a function that takes 3 numbers as arguments and perform multiplication of the numbers and returns the output. 

function multi(a=1,b=1,c=1){
    let result=a*b*c;
    console.log("Result is: ",result)
}
multi(10,2)// If we don't pass c-value then by default it is passing c=1 as mentioned into function decleration