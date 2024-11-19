//function hasTargetSum(array, target) {
  // Write your algorithm here
  //This will take an array, sort through possible combinatinations,
  //and return true if any pair equals the target value
//}

/* 
  Write the Big O time complexity of your function here
  //I will be attempting to use a nested loop, which would be O(n²)
*/

/* 
  Add your pseudocode here
*/
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] + array[i] === target) 
        return true;
    }
  }
  return false;
}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
