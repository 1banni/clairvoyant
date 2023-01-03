
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBenches } from '../../store/benches';
import BenchListItem from './BenchListItem';


const BenchList = props => {
  const benches = useSelector(state => Object.values(state.benches));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBenches())
  }, [dispatch])

  return (
    <>
      <div className='bench-list-container'>
        <h1>Benches</h1>
        <ol>
          {benches.map(bench => <BenchListItem bench={bench} key={bench.id} />)}
        </ol>
      </div>
    </>
  )
}


export default BenchList;
