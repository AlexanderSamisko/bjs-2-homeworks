function compareArrays(arr1, arr2) {
  let result;
 	if (arr1.length === arr2.length){
  result = arr1.every((item, idx) => item === arr2[idx]
	)} else result = false
  return result; 
}

function advancedFilter(arr) {
  let resultArr;
  const positive = arr.filter((item) => item > 0);
  const multiplicityToThree = positive.filter((item) => item % 3 === 0);
  resultArr = multiplicityToThree.map((item) => item * 10);

  return resultArr; // array
}
