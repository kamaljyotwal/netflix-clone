import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css"; // used to make styles appear similar on all browsers
import { GlobalStyle } from "./GlobalStyle"; // importing globalstyle to reset the styling
import reportWebVitals from "./reportWebVitals";
import { FirebaseContext } from "./context/firebaseContext";
import { firebaseConst } from "./lib/firebase.js";
// import { seedDatabase } from "./seed";
// seedDatabase(firebaseConst);

ReactDOM.render(
  <>
    <React.StrictMode>
      <FirebaseContext.Provider value={{ firebaseConst }}>
        <GlobalStyle />
        <App />
      </FirebaseContext.Provider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
