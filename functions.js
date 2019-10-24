"use strict";


/** 1. isHometown */

// Define your function here

function hometown(town){

  return town === 'San Francisco';

}

function getFullName(fname, lname){

  return `${fname} ${lname}`;
}

// Define your function here


/** 3. calculateTotal */
function calculateTotal(basePrice, state, tax=0.05) {
  
  let subtotal = basePrice * (1 + tax);
  let fee = 0;
  if (state === 'CA') {
    fee = 0.03 * subtotal;
  }
  else if (state === 'PA') {
    fee = 2;
  }
  else if (state === 'MA') {
    if (basePrice <= 100){
      fee = 1;
    }
    else {
      fee = 3;
    };
  }

  return subtotal + fee;

}

// Define your function here
