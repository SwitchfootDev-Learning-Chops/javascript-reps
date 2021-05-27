// codewars - my solution



//    psudo code
//   1. create variable to store ph number String
//   2. use forEach to execute the function for each element in the Array
//   3. create a call back function within the forEach methond (num)
//   4. use .replace() method to switch out 'x' in the variable string (phDigits) with the callback num
//   5. return phDigits to get phone number pattern from array of numbers


function createPhoneNumber(numbers){

    let phDigits = '(xxx) xxx-xxxx';
    
    numbers.forEach(num => {
      phDigits = phDigits.replace('x', num);
    });
    return phDigits
  }

