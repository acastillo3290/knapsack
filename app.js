/*
0/1 KnapSack

Given 2 Objects of length n
Object P representing Profit of the item in the object
Object W representing Weight of the item in the object
A variable M for the max weight of the bag
* sub Obj for Array

Fill the bag to the max capacity that will bring the most profit
return an object containing 1 or 0 (1 means the item was included, 0 means not included)

EXAMPLE:
m = 8
n = 4
p = {1,2,5,6}
w = {2,3,4,5}
answer = {0,1,0,1}
    - Item n2(2,3) and n4(6,5) have a combined weight of 8 and bring the most profit of 8

BONUS -> slight easier version.
Instead of returning Object of 0's and 1's 
Return the max profit of the filled bag -> in this case you would just return 8
*/

const knapSack = (weight, profit, capacity) => {
  // build table
  const table = Array(weight.length + 1)
    .fill()
    .map(() => Array(profit.length + 1).fill(0));
  // loop through table and populate
  for (let i = 1; i < table.length; i++) {}
  // return last value in table
};

const profit = [1, 2, 5, 6];
const weight = [2, 3, 4, 5];
console.log(knapSack(weight, profit, 8)); // output 8
