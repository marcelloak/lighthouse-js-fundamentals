const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (move === "north") y++;
    else if (move === "south") y--;
    else if (move === "east") x++;
    else x--;
  }
  let pos = [];
  pos.push(x);
  pos.push(y);
  return pos;
}

console.log(finalPosition(moves));