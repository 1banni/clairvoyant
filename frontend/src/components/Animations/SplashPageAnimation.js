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
  const [count, setCount] = useState(0);
  const [dir, setDir] = useState(1);


  useEffect(() => {
    const interval = setInterval(() => {

      // setGrid(Animate.flicker(grid, dir));
      setCount(count + dir);
      if (count >= 30) {
        setDir(-1);
      } else if (count <= 0) {
        setDir(1)
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])



  return (
    <div className="splash-animation">
      {Animate.convertToM(grid).map(row => row.map(el => {
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