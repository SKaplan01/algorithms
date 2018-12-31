//prints all the values of a square matrix in spiral order
//(starts at 0-0, the top left)

function spiral(matrix) {
  let loops = Math.ceil(matrix.length / 2);
  let min = 0;
  let max = matrix.length - 1;
  for (let i = 0; i < loops; i++) {
    let x = min;
    let y = min;

    //print top row of spiral
    while (x < max) {
      console.log(matrix[y][x]);
      x++;
    }

    //print right column of spiral
    while (y < max) {
      console.log(matrix[y][x]);
      y++;
    }

    //print bottom row of spiral
    while (x > min) {
      console.log(matrix[y][x]);
      x--;
    }

    //print left column of spiral
    while (y > min) {
      console.log(matrix[y][x]);
      y--;
    }

    min++;
    max--;
  }
}

let matrix = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];
let matrix3 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

//checking --> should print in numerical order (works)
spiral(matrix);
spiral(matrix3);

//prints all the values of a square matrix in spiral order
//uses RECURSION!
//(starts at 0-0, the top left)

function spiralRecursively(matrix, min = 0, max = matrix.length - 1) {
  while (min <= max) {
    let x = min;
    let y = min;

    //print top row of spiral
    while (x < max) {
      console.log(matrix[y][x]);
      x++;
    }

    //print right column of spiral
    while (y < max) {
      console.log(matrix[y][x]);
      y++;
    }

    //print bottom row of spiral
    while (x > min) {
      console.log(matrix[y][x]);
      x--;
    }

    //print left column of spiral
    while (y > min) {
      console.log(matrix[y][x]);
      y--;
    }

    min++;
    max--;
    spiralRecursively(matrix, min, max);
  }
  return undefined; //function does not return anything
}

//checking --> should print in numerical order (works)
spiralRecursively(matrix);
spiralRecursively(matrix3);
