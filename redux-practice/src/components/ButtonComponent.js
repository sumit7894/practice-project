// src/components/ButtonComponent.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../store/buttonSlice";

const ButtonComponent = () => {
  const dispatch = useDispatch();
  const showButton = useSelector((state) => state.button.showButton);

  return (
    <div>
      <button onClick={() => dispatch(toggleButton())}>
        Toggle Button
      </button>
      {showButton && <p>The button is visible!</p>}
    </div>
  );
};

export default ButtonComponent;
