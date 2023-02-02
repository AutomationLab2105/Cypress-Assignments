/*Program 4- Write a program to display student results. 
		If number above 90 then grade A
		If number above 70 and below 90 then grade B
If number above 50 and below 70 then grade C
If number below 70 then Fail
*/

let number=90
if(number>=90){
    console.log("Grade is A");
}
else if(number>=70){
    console.log("Grade is B");
}
else if(number>=50){
    console.log("Grade is C");
}
else{
    console.log("Fail")
}