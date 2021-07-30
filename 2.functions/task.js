"use strict"
// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }
   avg = parseFloat((sum / arr.length).toFixed(2));
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for  (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let j = 0; j < arrOfArr.length; j++) {
    if (func(arrOfArr[j]) > max) {
      max = func(arrOfArr[j]);
    }
  }  
  return max
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let difference;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }
  difference = max - min;
  return difference;
}

let arrOfArr = [[1, 2, 3], [4, 5, 6]];
 makeWork(arrOfArr, worker2); 

arrOfArr = [[10, 10, 11], [20, 10]];
 makeWork(arrOfArr, worker2); 

arrOfArr = [[0, 0, 0], [-1, -100]];
 makeWork(arrOfArr, worker2); 

arrOfArr = [[-10, -20, -40], [10, 20, 30]];
 makeWork(arrOfArr, worker2);

arrOfArr = [[0, 0, 0], [-1, -99]];
 makeWork(arrOfArr, worker2);
