"use strict";


/** 1. countWords */
function countWords(phrase) {
	// Replace this with your code

  const word_counts = {}

  for (const word of phrase.split(' ')){
    if (word_counts[word]){
      word_counts[word] += 1;
    }
    else{
      word_counts[word] = 1;
    };
  }

  return word_counts;

}


/** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {
	// Replace this with your code
}
