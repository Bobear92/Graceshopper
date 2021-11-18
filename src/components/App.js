import React, { useState, useEffect } from "react";

import { getUser } from "../api";
import { Login } from "./";

const App = () => {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
