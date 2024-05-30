const reverseArray = (orArray) => {
  let reversedArr = [];
  for (let i = orArray.length - 1; 0 <= i; i--) {
    reversedArr.push(orArray[i]);
  }
  return reversedArr;
};

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]
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
  let totalScore = 0;
  for (let i = 0; i < stud.length; i = i + 1) {
    console.log(stud[i].grade);
    totalScore = totalScore + stud.at(i).grade / stud.length;
  }
  return totalScore.toFixed(2);
};

const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 },
];

console.log(calculateAverageGrade(students)); // 4.4

//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
//Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).
//Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.


