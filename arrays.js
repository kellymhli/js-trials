"use strict";


/** 1. printIndices */
const printIndices = (items) => {
	// Replace this with your code

  for (const i in items) {
    console.log(items[i], i);
  }
};


/** 2. everyOtherItem */
const everyOtherItem = (items) => {
	// Replace this with your code

  const result = []
  for (const i of items) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  console.log(result)
};


/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	// Replace this with your code

  const sorted_items = items.sort((a, b) => a - b);
  const sliced_items = sorted_items.slice(0, n);
  sliced_items.reverse();

  console.log(sliced_items);
};
