const reverseArray =(array)=>array.map(el => el).reverse()


const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]


const reverseArray3 =(array)=>array.filter(el => el).reverse()


const originalArray3 = [1, 2, 3, 4, 5];
const reversedArray3 = reverseArray(originalArray3);
console.log(reversedArray3); // [5, 4, 3, 2, 1]


const reverseArray2 =(array)=>array.slice()

const originalArray2 = [1, 2, 3, 4, 5];
const reversedArray2 = reverseArray(originalArray2);
console.log(reversedArray2); // [5, 4, 3, 2, 1]
//////////////////////////////////////////////

const uniqueValues = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2);
  const uniqueVal = (arr) => {    
    return arr.filter((el, id) => arr.indexOf(el) === id);
  };
  return uniqueVal(arr3);
};
const array1 = [1, 2, 3, 4, 5, 5, 5];
const array2 = [3, 4, 5, 6, 7, 7, 7, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]
//////////////////////////////////////////////

const calculateAverageGrade = (stud) => {
  let initialValue = 0
  let sum = stud.reduce((accumulator, currentValue) => accumulator + currentValue.grade,
  initialValue,
);
return(sum/stud.length).toFixed(2)
};

const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 },
];

console.log(calculateAverageGrade(students)); // 4.40

//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
//Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).
//Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.
