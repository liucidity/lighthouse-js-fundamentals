function finalPosition(moves) {

  // starting x y coordinates
  const coordinates = [0,0];

  // read moves array 
  for (let move of moves) {
    switch (move) {
      case 'north':
        coordinates[1] += 1
        break;
      case 'south':
        coordinates[1] -= 1
        break;
      case 'west':
        coordinates[0] -= 1
        break;
      case 'east':
        coordinates[0] += 1
        break;
    }
  }
  return coordinates
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
finalPosition(moves)