import React from "react";
import { withRouter, useHistory } from "react-router-dom";

const BenchListItem = ({ bench }) => {
  let history = useHistory();

  const goToBench = () => {
    history.push(`/benches/${bench.id}`)
  }

  return (
    <ul className="bench-index-item" key={bench.id} onClick={goToBench}>
      <li><h4>Title: {bench.title}</h4></li>
        <li>Description: {bench.description}</li>
        <li>Price: {bench.price}</li>
        <li>Seating: {bench.seating}</li>
    </ul>
  )
}
export default withRouter(BenchListItem);
