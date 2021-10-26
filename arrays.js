// array initialization
const perStudentPetCount = [
  0, 100, 0, 2, 1, 1, 4, 0, 0, 0, 3, 2, 1, 3, 0, 2, 2, 4,
];

// adding an item to the array
perStudentPetCount.push(/*the value of the item */ 5);

// removing the last item from the array
perStudentPetCount.pop();

// removing an specific item by it's index
perStudentPetCount.splice(0, 1); // removing the first item in the array

// getting the index of of a specific item via it's value
perStudentPetCount.indexOf(100);

// the length of the array , the only property in the array class in JavaScript
const arrayLength = perStudentPetCount.length;

// as the same of map method but it doesn't return any thing
perStudentPetCount.forEach((element) => {
  // your decision to each element starts from 0 index to the lenght-1 index
});

// getting a specific item in the array
console.log(perStudentPetCount[6]);

// if you tried to get out of range index you will get undefined value
console.log(perStudentPetCount[100]);

// if i want to get a new array based on the existing array i can use map method
const newArray = perStudentPetCount.map((element) => {
  return element + 1;
});

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

// Returns the elements of an array that meet the condition specified in a callback function.
console.log(perStudentPetCount.filter(isPrime));

// multi array initialization

var dinnerChoices = [
  ["Salad", "Soup", "Cheese Plate"],
  ["Chicken", "Salmon", "Lasagna"],
];

console.log(dinnerChoices[0][0]) // 'Salad'
console.log(dinnerChoices[0][1]) // 'Soup'
console.log(dinnerChoices[1][2]) // 'Lasagna'

dinnerChoices[0].push('Fish')
console.log(dinnerChoices);  // fish


