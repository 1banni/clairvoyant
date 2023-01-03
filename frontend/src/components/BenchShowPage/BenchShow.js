import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { fetchBench } from "../../store/benches";

const BenchShow = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { benchId } = useParams();
  const bench = useSelector(store => store.benches[benchId]);

  useEffect(() => {
    dispatch(fetchBench(benchId));
  }, [dispatch, benchId])

  const returnToIndex = () => {
    history.push('/');
  }


  if (!bench) return null;
  return (
    <>
    <div>
      <h1>{bench.title}</h1>
      <h3>Details</h3>
      <p>{bench.description}</p>
      <ul>
        <li>Price: ${bench.price}</li>
        <li>Seats: {bench.seating}</li>
        <li>Latitude: {bench.lat}</li>
        <li>Longitude: {bench.lng}</li>
      </ul>
      <button onClick={returnToIndex}>Return Home
        {/* <Link to="/">Return Home</Link> */}
      </button>
    </div>
    </>
  )
}

export default BenchShow;
