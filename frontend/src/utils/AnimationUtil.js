/* TODO (no value add / to follow good practices ) - refactor simile to ModalUtil*/
/* TODO: remove unused methods */


const AnimationUtil = {
  print2D (arr) {
    arr.forEach(row => {
      console.log(row.join(' '));
    })
  },

  convertToM (arr, cap) {
    let newArr = [];

    // debugger;
    arr.forEach(row => {
      let newRow = [];
      row.forEach(el => {
        if (el === 0 || el >= cap) {
          newRow.push(' ')
        } else {
          newRow.push('M')
        }
      });
      newArr.push(newRow);
    })

    return newArr;
  },

  typewriterGridPrint (arr) {
    AnimationUtil.print2D(AnimationUtil.convertToM(arr));
  },

  flickerEl (el, dir, propensity=0.25) {
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
  },

  flicker (arr, dir) {
    let newArr = [];

    arr.forEach( (row, i) => {
      let newRow =  [];
      row.forEach( (el, j) => {
        newRow.push(AnimationUtil.flickerEl(el, dir));
      });
      newArr.push(newRow);
    })

    return newArr;
  }
}

export default AnimationUtil;

/*
export const print2D = (arr) => {
  arr.forEach(row => {
    console.log(row.join(' '));
  })
}

export const convertToM = (arr, cap) => {
  // show based on whether or not num % 2 is 0
  // elements that aren't 0/1
  let newArr = [];

  // debugger;
  arr.forEach(row => {
    let newRow = [];
    row.forEach(el => {
      // console.log(el, cap);
      // if (el > 0) {
      //   newRow.push('M');
      // }
      if (el === 0 || el >= cap) {
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
*/