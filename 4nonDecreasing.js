function nonDecreasing(arr) {
  let newArr = [];
  let currBigNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currBigNum) {
      currBigNum = arr[i];
      newArr.push(arr[i]);  
    }
  }
console.log(newArr.join(` `));
}
nonDecreasing([1, 2, 3, 4]);
