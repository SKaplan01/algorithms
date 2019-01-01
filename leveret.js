//PROBLEM:
//given a matrix of integers representing a garden of carrots
//returns the number of carrots a leveret eats
//the leveret starts in the center with highest number of carrots
//moves to the adjacent cell (West, North, East, South) with most carrots, until all adjacent cells are empty

// compares 4 points in a matrix
// returns the coordinates of the point with highest value
// if there are coordinates with equal value, returns FIRST coordinates with high value
// coordinates passed as arrays [y, x]
// assumes at least one valid coordinate will be passed
function findBestCoordinates(matrix, first, second, third, fourth) {
  let coords = [first, second, third, fourth];

  //only check coordinates that are actually in the matrix
  //coordValues for coordinates outside matrix will be "undefined"
  let coordValues = [];
  for (let j = 0; j < coords.length; j++) {
    if (
      coords[j][0] >= 0 &&
      coords[j][0] < matrix.length &&
      (coords[j][1] >= 0 && coords[j][1] < matrix[0].length)
    ) {
      coordValues.push(matrix[coords[j][0]][coords[j][1]]);
    } else {
      coordValues.push(undefined); //preserves order so index of highest value matches index in coords array
    }
  }

  let highest;
  let indexHighest;
  for (let i = 0; i < coordValues.length; i++) {
    if (!highest && coordValues[i] !== undefined) {
      highest = coordValues[i];
      indexHighest = i;
    }
    if (coordValues[i] > highest) {
      highest = coordValues[i];
      indexHighest = i;
    }
  }
  return coords[indexHighest];
}

//find start point for leveret
function findStart(garden) {
  let y1 = Math.floor(garden.length / 2);
  let y2 = Math.floor((garden.length - 1) / 2);
  let x1 = Math.floor(garden[0].length / 2);
  let x2 = Math.floor((garden[0].length - 1) / 2);
  return findBestCoordinates(garden, [y1, x1], [y1, x2], [y2, x2], [y2, x1]);
}

let garden = [[1, 1, 1], [0, 1, 1], [9, 1, 9]];

let garden2 = [[9, 9, 9, 9], [9, 3, 1, 0], [9, 1, 4, 2], [9, 9, 1, 0]];

let garden3 = [
  [2, 3, 1, 4, 2, 2, 3],
  [2, 3, 0, 4, 0, 3, 0],
  [1, 7, 0, 2, 1, 2, 3],
  [9, 3, 0, 4, 2, 0, 3]
];

//console.log(findStart(garden)); //--> works [1, 1]
//console.log(findStart(garden2)); //--> works [2, 2]
//console.log(findStart(garden3)); //--> works [1, 3]

//returns the total carrots eaten
function getCarrotCount(garden) {
  let start = findStart(garden);
  let currCoords = start;
  let carrotCount = 0;
  while (garden[currCoords[0]][currCoords[1]] !== 0) {
    carrotCount += garden[currCoords[0]][currCoords[1]];
    garden[currCoords[0]][currCoords[1]] = 0;
    let west = [currCoords[0], currCoords[1] - 1];
    let north = [currCoords[0] - 1, currCoords[1]];
    let east = [currCoords[0], currCoords[1] + 1];
    let south = [currCoords[0] + 1, currCoords[1]];
    currCoords = findBestCoordinates(garden, west, north, east, south);
  }
  return carrotCount;
}

// console.log(getCarrotCount(garden)); // 3
// console.log(getCarrotCount(garden2)); // 6
// console.log(getCarrotCount(garden3)); // 15
