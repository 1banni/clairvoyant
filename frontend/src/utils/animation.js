
export const print2D = (arr) => {
  arr.forEach(row => {
    console.log(row.join(' '));
  })
}

export const convertToM = (arr, count) => {
  // show based on whether or not num % 2 is 0
  // elements that aren't 0/1
  let newArr = [];

  // debugger;
  arr.forEach(row => {
    let newRow = [];
    row.forEach(el => {
      // console.log(el, count);
      if (el === 0 || el >= count) {
        newRow.push(' ')
      } else {
        newRow.push('M')
      }
    });
    newArr.push(newRow);
  })

  return newArr;
}

// This will change in react implementation
export const typewriterGridPrint = (arr) => {
  print2D(convertToM(arr));
}

export const flickerEl = (el, dir, propensity=0.25) => {
  // debugger;
  if (Math.random() <= propensity) {
    if (el === 2) {
      return 3;
    } else if (el === 3) {
      return 2
    } else {
      return el;
    }
  } else {
    return el;
  }
}

export const flicker = (arr, dir) => {
  let newArr = [];

  arr.forEach( (row, i) => {
    let newRow =  [];
    row.forEach( (el, j) => {
      newRow.push(flickerEl(el, dir));
    });
    newArr.push(newRow);
  })

  return newArr;
}