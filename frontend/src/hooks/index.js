import { useState } from "react";
import { useDispatch } from "react-redux";

export const useInput = (initialValue) => {
  // Initialize useState
  const [value, setValue] = useState(initialValue);
  // Create changeHandler for input form
  const changeHandler = e => setValue(e.target.value);

  return [value, changeHandler];
}

export const useSubmit = ({action, createAction, onSuccess}) => {
  const dispatch = useDispatch();
  let [errors, setErrors] = useState([]);
  console.log('in handle submit');

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('in handle submit');
    setErrors([]);
    return dispatch(createAction())
       .catch(async res => {
          let data;
          try { data = await res.clone().json(); }
          catch { data = await res.text(); }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
      })
      .then(onSuccess)
    // let res = await dispatch(createAction());
    // let data;
    // try { data = await res.clone().json(); }
    // catch { data = ''; } // data = await res.text()
    // console.log('data');
    // console.log(data);
    // console.log(data?.errors);
    // console.log('res');
    // console.log(res);
    // if (data?.errors) setErrors(data.errors);
    // else if (data) setErrors([data]);
    // else setErrors(res);
    // console.log('errors');
    // console.log(errors);

    // // return dispatch(createAction())
    // //   .catch(async res => {
    // //       let data;
    // //       try { data = await res.clone().json(); }
    //       catch { data = await res.text(); }
    //       console.log('data');
    //       console.log(data);
    //       console.log(data?.errors);
    //       console.log('res');
    //       console.log(res);
    //       if (data?.errors) setErrors(data.errors);
    //       else if (data) setErrors([data]);
    //       else setErrors([res.statusText]);
    //       console.log('errors');
    //       console.log(errors);
    //   })
    //   .then(onSuccess)
  }

  return [errors, handleSubmit];
}
