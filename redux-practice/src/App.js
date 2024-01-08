// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ButtonComponent from "./components/ButtonComponent";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React with Redux Example</h1>
        <ButtonComponent />
      </div>
    </Provider>
  );
};

export default App;
