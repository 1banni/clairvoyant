import React, { useEffect, useState } from 'react'
import './SplashPageAnimation.css';
// import * as Animate from '../../utils/animation';
import AnimationUtil from '../../utils/AnimationUtil';



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
  const [count, setCount] = useState({
    tick: 1,
    dir: 1
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const ceil = 30;
      const floor = 3;
      setCount(prev => {
        if (prev.tick > ceil) {
          return {tick: ceil, dir: -1}
        } else if (prev.tick < floor) {
          return {tick: floor, dir: 1};
        } else {
          const nextTick = prev.tick + prev.dir
          return {tick: nextTick, dir: prev.dir}
        }
      });
    }, 150);

    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <div className="splash-animation-container">
      <div className="splash-animation">
        {AnimationUtil.convertToM(grid, count.tick).map(row => row.map(el => {
          return <div className="splash-animation-el">{el}</div>
        }))}
      </div>
    </div>
  )
}

export default SplashAnimation