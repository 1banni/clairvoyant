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