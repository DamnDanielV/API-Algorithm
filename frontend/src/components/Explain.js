import React from "react";

export const Explain = () => {
  return (
    <div className="m-5">
      
      <div className="card text-dark bg-light mb-3">
          <div className="card-header"><h2>Explaining Algorithm</h2></div>
          <div className="card-body">
            <h5 className="card-title">Algorithm performance: O(n ^ 2)</h5>
            <p className="card-text">
            To solve this challenge I decided to go through the list and calls a
            function twice, this functions receives an array, so in the first call
            this array receives an array, from the firsts element in the original
            array until the element that belongs to the actual position of the
            iteration, and in the second call from the next element of the actual
            iteration until the last element in the array, this function takes the
            array and returns the sum of its elements, with that twice calls we
            get two numbers that represent the sum of the left and right sides of
            the actual index, after that, the values are compared, if these values
            are equals means the sum of both sides are equal so breaks the loop
            and returns the actual index.
            <a href="https://github.com/DamnDanielV/API-Algorithm/blob/main/algorithm_api/responsechallenge/code.py" className="btn btn-outline-info m-3">See Code</a>
            </p>

          </div>
      </div>
    </div>
  );
};
