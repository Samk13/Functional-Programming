// Split a String into an Array Using the split Method

// The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

// Here are two examples that split one string by spaces, then another by digits using a regular expression:

//     var str = "Hello World";
//     var bySpace = str.split(" ");
//     // Sets bySpace to ["Hello", "World"]

//     var otherString = "How9are7you2today";
//     var byDigits = otherString.split(/\d/);
//     // Sets byDigits to ["How", "are", "you", "today"]

// Since strings are immutable, the split method makes it easier to work with them.

// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.


function splitify(str) {
    // Add your code below this line
    let result = str.split(/\W/);
    return result;
    
    // Add your code above this line
  }

  console.log(
  
  splitify("Hello World,I-am code")
  );


  function sentensify(str) {
    // Add your code below this line
    console.log(str);
    
    let result = str.split(/\W+/).join(" ");
    return result
    // Add your code above this line
  }
  
  console.log(
  sentensify("May-the-force-be-with-you")
  );
  