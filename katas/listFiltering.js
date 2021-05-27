//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

/* psudo
1. use .filter() method to filter out strings
2. use typeof to grab integers and boot the strings out of the list
3. return the new list of integers only



*/

const filter_list = (l) => l.filter(newList => typeof newList !== 'string');

// test case example
//filter_list([1,2,'a','b']),[1,2])