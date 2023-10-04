function addAndRemove(arr) {
  let initialNum = 1;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];

    if (command == 'add') {
      newArr.push(initialNum);
      initialNum++;
    } else if (command == 'remove') {
      newArr.pop();
      initialNum++;
    }
  }

  if (newArr.length > 0) {
    console.log(newArr.join(' '));
  } else {
    console.log('Empty');
  }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
