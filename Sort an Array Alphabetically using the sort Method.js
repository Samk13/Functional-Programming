// function alphabeticalOrder(arr) {
//     // Add your code below this line
//     return arr.sort(function(a,b) {
//       return a > b;
//     });
//     // Add your code above this line
//   }
//   console.log(
  
//   alphabeticalOrder(["a", "a", "a", "a", "x", "t"])
//   );


var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let result = [];
  return result.concat(globalArray).sort((a,b)=> a>b);

  
  // Add your code above this line
};

console.log(
nonMutatingSort(globalArray)
);