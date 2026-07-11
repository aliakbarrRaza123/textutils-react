import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

// generally main app function can return only one jsx element(tag+content)
// jsx fragment can return more than one jsx element using (<> and </>)
// <Navbar/>  (calling the component)

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleBlueDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleGreenDarkMode = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "#144f06";
      showAlert("Green dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about={" "}
          mode={mode}
          toggleBlueDarkMode={toggleBlueDarkMode}
          toggleGreenDarkMode={toggleGreenDarkMode}
        />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            {/* use exact keyword for exact matching (before v6,v7) */}
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter , Character Counter"
                  mode={mode}
                /> 
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
// default export 1 hota hai har file ka so we can import this App component in another file
