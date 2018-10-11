import React from "react";
import auth from "../hoc/auth";

const MovieQuote =  props => {
  return (
    <div className="center">
      <h1>Movie Quote</h1>
      <h4>Run Forrest Run</h4>
    </div>
  )
}

export default auth(MovieQuote);
