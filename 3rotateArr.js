function rotateArr(arr) {
  let nStep = Number(arr.pop());
  let rotatedArr = arr.slice();
  
    for (let i = 0; i < nStep; i++) {
      let lastEl = rotatedArr.pop();
      rotatedArr.unshift(lastEl);
    }

    console.log(rotatedArr.join(` `));
}
rotateArr(['1', '2', '3', '4', '2']);