import React, { useEffect, useState } from 'react'

import * as Animate from '../../utils/animation';


const mAnimatedGrid = [
  [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0],
  [0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,12,0,1,1,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,11,0,1,0,0,0,20,0,1,0,0],
  [0,0,0,0,0,0,1,4,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,0,0,1,1,0,24,1,1,1,1,0,0,0,0,19,0,1,0,1,0,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,0,1,0,1,1,0,0,14,0,1],
  [0,0,0,0,0,0,0,0,0,0,5,0,10,1,1,0,0,1,0,1,0,0,1,0,1],
  [0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1],
  [0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,15,0,0,9,0,0,1,1,1,0,0,0,0,1,13,1,1,0],
  [0,0,0,0,0,0,0,0,0,16,0,0,0,1,0,1,0,0,0,1,0,1,0,0,6],
  [0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,8],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,1,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,25,0,0,0,1,0,1,1,0,0,1,0,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,7,3,1,1,1,0,0,1,1,0,0,26,0,18]
]


const SplashAnimation = () => {
  const grid = mAnimatedGrid;
  const [count, setCount] = useState([1,1]); // [tick (count), tickDirection]

  useEffect(() => {
    const interval = setInterval(() => {
      const ceil = 30;
      const floor = 3;
      // setGrid(Animate.flicker(grid, dir));
      // testing/debugging
      // console.log('count');
      // console.log(count)
      // console.count(count);

      setCount(prev => {
        // console.log(prev)
        // if (prev[0]<1) console.log('wtf')
        // console.count('settingcount');
        if (prev[0] > ceil) {
          // console.count('if')
          return [ceil,-1];
        } else if (prev[0] < floor) {
          // console.count('else if');
          return [floor, 1];
        } else {
          // console.count('else');
          // console.log(prev)
          return [prev[0] + prev[1], prev[1]];
        }

        // let newCount = prevCount + dir;
        // console.log(newCount)
        // if (newCount > 30) {
        //   newCount = 30;
        //   setDir(prevDir => {return -1;});
        // } else if (newCount < 1) {
        //   newCount = 1;
        //   setDir(prevDir => {return 1;})
        // }
        // return newCount;
      });
    }, 150);

    return () => {
      clearInterval(interval);
    }
  }, [])



  return (
    <div className="splash-animation">
      {Animate.convertToM(grid, count[0]).map(row => row.map(el => {
        return <div className="splash-animation-el">{el}</div>
      }))}
      {/* {grid.map((row, idx) => {
        return (
          <div className="splash-animation-row">
            {row.map(el => {
              return <div className="splash-animation-col">m</div>
            })}
          </div>
        )
      })} */}
    </div>
  )
}

export default SplashAnimation