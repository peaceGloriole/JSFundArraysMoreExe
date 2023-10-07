function accGames(arr) {
  let initGames = arr[0];
  let newArr = []; 
  let command = ``;
  let game = ``;
    
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  for (let i = 0; i < newArr.length; i++){
    command = newArr[i];
  }

}

accGames([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
]);

