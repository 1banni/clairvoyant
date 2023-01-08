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
  // const [grid, setGrid] = useState(mAnimatedGrid);
  const grid = mAnimatedGrid;
  const [count, setCount] = useState(1);
  const [dir, setDir] = useState(1);

  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      // setGrid(Animate.flicker(grid, dir));
      // testing/debugging
      i++;
      if (i > 100) {
        console.log(count);
        i = 0;
      }
      // console.log('count');
      // console.log(count)
      // console.count(count);

      setCount(prevCount => {
        let newCount = prevCount + dir;
        console.log(newCount)
        if (newCount > 30) {
          newCount = 30;
          setDir(prevDir => {
            console.log('yahtzee')
            console.log(prevDir)
            return -1;
          });
        } else if (newCount < 1) {
          newCount = 1;
          setDir(prevDir => {return 1;})
        }
        return newCount;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, [])



  return (
    <div className="splash-animation">
      {Animate.convertToM(grid, count).map(row => row.map(el => {
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