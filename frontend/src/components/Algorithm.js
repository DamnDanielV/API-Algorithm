import React, { createRef, useState } from "react";
import axios from "axios";
import { Explain } from "./Explain";

const Algorithm = () => {
  const [numberFound, setNumberFound] = useState(0);
  const [message, setMessage] = useState("");
  const [choice, setChoice] = useState(false);
  const arrayRef = createRef();
  const communicateServer = () => {
    axios
      .post(
        "/api/hi",
        {
          numbers: arrayRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setNumberFound(response.data.index);
        if (response.data.index === 0) {
          setMessage("No number that satisfy the condition");
        } else {
          setMessage("");
        }
      })
      .catch((error) => {
        setMessage("Check your input!");
        setNumberFound(0);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    communicateServer();

    arrayRef.current.value = "";
  };
  return (
    <div>
      <div className="mb-2 gap-2 col-8 mx-auto animate__animated animate__fadeIn">
        <Explain />
        {!choice && (
          <button
            onClick={() => setChoice(!choice)}
            className="btn btn-primary animate__animated animate__fadeIn"
          >
            Wanna try?
          </button>
        )}
      </div>
      <div className="mb-3 d-grid gap-2 col-6 mx-auto">
        {choice && (
          <div>
            {" "}
            <h4 className="animate__animated animate__fadeIn">
              Introduce a serie of numbers separated by comma
            </h4>
            <div className="mb-3 d-grid gap-2 col-6 mx-auto animate__animated animate__fadeInUp">
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="form mb-1 d-grid gap-2 mx-auto"
              >
                <input
                  ref={arrayRef}
                  name="numbers"
                  className="form-control"
                ></input>
                <button className="btn btn-primary">Check</button>
              </form>

              <div className="form mb-3 d-grid gap-2 mx-auto">
                {numberFound !== 0 ? (
                  <h3 className="animate__animated animate__fadeIn">
                    Number found at: {numberFound}
                  </h3>
                ) : (
                  <h4 className="animate__animated animate__fadeIn">
                    {message}
                  </h4>
                )}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => setChoice(!choice)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Algorithm;
