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