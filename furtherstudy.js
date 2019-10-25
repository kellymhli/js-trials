"use strict";

function wordsInCommon(words1, words2) {

  const set1 = new Set(words1);
  const set2 = new Set(words2);

  const result = new Set();

  for (const word of set1) {
    if (set2.has(word)) {
      result.add(word);
    }
  }

  return Array.from(result);

};

function kidsGame(names){
  // Not complete but close
  // Get first word and remove from consideration; add it to our output
  
    const output = [names.shift()];
    console.log(output)
    const firstLetterToWords = {};

    for (const name of names) {
      if (name[0] in firstLetterToWords) {
        firstLetterToWords[name[0]].push(name);
      }
      else {
        firstLetterToWords[name[0]] = [name];        
      }
    }

    console.log(firstLetterToWords)
    
    while (true) {
      const outputWord = output[output.length-1];
      const startLetter = outputWord[outputWord.length-1];
      console.log(outputWord, startLetter);
      console.log(output);

      if (!(startLetter in firstLetterToWords)){
        console.log('We broke it');
        break;
      }

      const word = firstLetterToWords[startLetter].shift();
      output.push(word);

    }

    return output;

};