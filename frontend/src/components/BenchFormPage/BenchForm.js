import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { createBench } from "../../store/benches";
import { useInput, useSubmit } from '../../hooks';


const BenchForm = props => {
  const history = useHistory();
  const location = useLocation();
  const sessionUser = useSelector(state => state.session.user)
  const [title, titleChange] = useInput('');
  const [description, descriptionChange] = useInput('');
  const [price, priceChange] = useInput(20);
  const [seating, seatingChange] = useInput(3);
  const [errors, setErrors, handleSubmit] = useSubmit({
    createAction: () => {
      const bench = {
        title, description, price, seating,
        // lat: location.search('lat'),
        // lng: location.search('lng')
        lat: 0,
        lng: 0
      };
      return createBench(bench);
    },
    onSuccess: () => history.push('/')
  });

  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <form onSubmit={handleSubmit} className="new-bench-form">
      <label className="title">Title<input
        type="text"
        value={title}
        onChange={titleChange}
        required
      /></label>
      <label className="description">Description<input
        type="text"
        value={description}
        onChange={descriptionChange}
        required
      /></label>
      <label className="price">price<input
        type="number"
        value={price}
        onChange={priceChange}
        required
      /></label>
      <label className="seating">seating<input
        type="number"
        value={seating}
        onChange={seatingChange}
        required
      /></label>
      {/* <input disabled name="lat" value={location.search('lat')}/>
      <input disabled name="lng" value={location.search('lng')}/> */}
      <button type="submit"></button>
    </form>
  )
}

export default BenchForm;
