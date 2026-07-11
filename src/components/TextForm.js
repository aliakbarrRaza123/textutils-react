import React, { useState } from "react";
import PropTypes from "prop-types";

// hooks allows you to use features(state) of class based components in function based components
export default function TextForm(props) {
  // changes the state everytime without any reload
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase !", "success");
  };

  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase !", "success");
  };

  const handleTextClearing = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared !", "success");
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Spaces Removed !", "success");
  };

  //navigator is the object of browser
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied !", "success");
  };

  // used to change the state of an event
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // first paramter is name of the state variable and second is used to update the state
  const [text, setText] = useState("");
  const words = text.split(" ").filter((element) => {
    return element.length !== 0;
  });

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode !== "light" ? "white" : "black" }}
      >
        <h2 className = "mb-2">{props.heading}</h2>
        <div className = "mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter your text here : "
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "rgb(19 70 110)"
                  : props.mode === "green"
                    ? "#1f6b0d"
                    : "white",
              color: props.mode !== "light" ? "white" : "black",
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCaseClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCaseClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleTextClearing}
          disabled={text.length === 0}
        >
          Clear the text
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveSpaces}
          disabled={text.length === 0}
        >
          Remove Spaces
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode !== "light" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p className="mb-1">
          {words.length} words and {text.length} characters
        </p>
        <p className="mt-1">{0.008 * words.length} minutes to read</p>
        <h2> Preview </h2>
        <p>
          {text.length > 0 ? text : "Nothing to preview"} 
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  textArea: PropTypes.string,
};
