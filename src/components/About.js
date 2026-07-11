import React, { useState } from "react";

export default function About(props) 
{
  // state 1
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor : props.mode === 'dark'?'rgb(36,74,104)':'white',
  }


  // state 2 (used for a dark mode button in about component)
  // const [btnText, setMyBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.backgroundColor === "white") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border : "1px solid white"
  //     });
  //     setMyBtnText("Enable Light Mode");
  //   }
  //   else
  //   {
  //       setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setMyBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container" style={{color : props.mode === 'dark'? 'white' : props.mode === 'green'?'#fff8dc':'black'}}>
      <h2 className="ps-1 my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Transform your text with ease. Convert it to uppercase or lowercase, remove extra spaces, copy the text instantly, and view real-time statistics including word count, character count, and estimated reading time—all in one place. 
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is completely free to use. Enjoy all text editing and analysis features without any subscription, hidden charges, or limitations.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils works smoothly across all modern web browsers, including Chrome, Firefox, Edge, and Safari, providing a consistent and reliable experience wherever you use it.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
