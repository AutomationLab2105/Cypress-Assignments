//Program 4- Write a function that accepts interest, principle, and tenure and calculates EMI

function calculate_EMI(interest,principle,tenure) {
    let i = interest / (12 * 100);
    let t = tenure * 12;
    let emi = (principle * i * Math.pow((1 + i), t)) / (Math.pow((1 + i), t) - 1);
    return emi;
  }
  
  let principle = 350000;
  let interest = 18;
  let tenure = 1;
  console.log(calculate_EMI(interest,principle,tenure));
  