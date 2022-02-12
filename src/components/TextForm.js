import React, { useState } from "react";

// useState is a hook

export default function TextForm(props) {
  //FUNCTIONS TO PERFORM OPERATIONS ON TEXT
  const handleUpper = () => {
    let newtext = text.toUpperCase();
    console.log("Uppercase handled");
    setText(newtext);
  };
  const handleLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClear = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleSpaces = () => {
    let newtext = text.split(" ").join("");
    setText(newtext);
  };
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/).join(" ");
    setText(newtext);
  };

  //IMP FUNCTION -- NECESSARY FOR ALL INPUTS
  const handleChange = (event) => {
    setText(event.target.value);
  };

  //DECLARING A STATE VARIABLE WHICH IS USED IN THE FUCNTION
  const [text, setText] = useState("");

  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{props.text}</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "dark" ? "white" : "black",
              }}
              value={text}
              onChange={handleChange}
              rows="6"
            ></textarea>
            <button
              className={`btn btn-${props.mode} mx-2 my-2`}
              onClick={handleUpper}
            >
              Convert To Uppercase
            </button>
            <button
              className={`btn btn-${props.mode} mx-2 my-2`}
              onClick={handleLower}
            >
              Convert To Lowercase
            </button>
            <button
              className={`btn btn-${props.mode} mx-2 my-2`}
              onClick={handleSpaces}
            >
              Remove Spaces
            </button>
            <button
              className={`btn btn-${props.mode} mx-2 my-2`}
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            <button
              className={`btn btn-${props.mode} mx-2 my-2`}
              onClick={handleClear}
            >
              Clear Text
            </button>
          </div>
        </div>
        <div className="container">
          <h1>Text summary</h1>
          <p>
            Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}{" "}
            characters
          </p>
          <p>Time required to read: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        </div>
      </div>
    </>
  );
}
