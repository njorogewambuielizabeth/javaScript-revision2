//1. Write a function that takes a string as input and 
//returns the most common character in the string.

function mostCommonChar(string) {
      const charCount = {};
    for (const char of string) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    let mostCommonChar = null;
    let highestCount = 0;
    for (const [char, count] of Object.entries(charCount)) {
      if (count > highestCount) {
        mostCommonChar = char;
        highestCount = count;
      }
    }
  
    return mostCommonChar;
  }
  let myString = "Elizabeth loves travelling and swimming";
  let result = mostCommonChar(myString);
  console.log(result);

  //2. Write a function that takes an array of integers and 
  //returns a new array that contains the same integers, sorted in descending order.
  function sorted(arr) {

    return arr.sort((a,b) =>b -a);
  }
 let nums = [12,54,2,5,67,89,10,23];
 let sortedArray =sorted(nums);
 console.log(nums);
  
 //3. Write a function that takes an array of strings and
 // returns a new array that contains the same strings, sorted alphabetically.
 function sortedAlpha(str) {
  return str.sort()
  
 }
 let myArray =["Grapes","Peas","Banana","Avocado","Melon"];
 let x = sortedAlpha(myArray);
 console.log(myArray);

 //4. Write a function that takes a string and
 // returns a new string that is a pig Latin translation of the original string.
 function pigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const words = str.split(' ');
  function translateWords(word) {
    const letters = word.split('');
    const vowelIndex = letters.findIndex(letter => vowels.includes(letter.toLowerCase()));
    if (vowelIndex === 0) {
      return word + 'way';
    }
    else {
      const consonantLetter = letters.slice(0, vowelIndex).join('');
      const restOfWord = letters.slice(vowelIndex).join('');
      return restOfWord + consonantLetter + 'ay';
    }
  }
  const translate = words.map(translateWords);
  return translate.join(' ');
    
  }
  let string ="how are you?";
  const translateString =pigLatin(string);
  console.log(translateString);

  //5.Write a function that takes two arrays of integers and returns a new array 
  //that contains all the integers that are present in both input arrays.
 function getIntegers(arr1,arr2) {
  let x = new Set(arr1);
  return arr2.filter(num =>x.has(num));
 }
 let arr1=[1,2,3,4,5,6];
 let arr2=[5,3,7,8,10,2,6];
 let commonElements = getIntegers(arr1,arr2);
 console.log(commonElements);

 //6. Write a function that takes a string and returns a new 
 //string that is an anagram of the original string.

 function createAnagram(str) {
  const characters = str.split('');

  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  
  const shuffledString = characters.join('');
  
  return shuffledString;
}
const originalString = 'hello Elizabeth';
const anagram = createAnagram(originalString);
console.log(anagram); 

//7. Write a function that takes an array of integers and 
//returns the second highest integer in the array.
function secondHighestInteger(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  return arr[1];
}
let arr = [1, 15, 30, 9, 20];
let secondHighest = secondHighestInteger(arr);
console.log(secondHighest); 

//8. Write a function that takes a string and returns true 
//if the string is a valid email address and false otherwise.
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}
let email = 'test@example.com';
let validMail = isValidEmail(email);
console.log(validMail); 

//9. Write a function that takes an array of 
//integers and returns the sum of the squares of all the odd numbers in the array.
function sumOfOddSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i] * arr[i];
    }
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5];
let results = sumOfOddSquares(numbers);
console.log(results); 

//10. Write a function that takes a string and returns a new 
//string that is a capitalized version of the original string, with the exception of articles, prepositions,
// and conjunctions (such as "the", "a", "an", "in", "on", "and", etc.).
function capitalizeWithoutSmallWords(str) {
  let smallWords = ["a", "an", "and", "as", "at", "but", "by", "en", "for", "if", "in", "nor", "of", "on", "or", "per", "the", "to", "vs", "via"];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (i === 0 || !smallWords.includes(word.toLowerCase())) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  return words.join(" ");
}
let sentence = "i enjoy reading novels,watching movies and eating";
let final = capitalizeWithoutSmallWords(sentence);
console.log(final); 




