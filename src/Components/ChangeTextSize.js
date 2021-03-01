import React, { useEffect, useState } from "react";
import "../Styles/ChangeTextSize.css";

const ChangeTextSize = () => {
  const [value, setValue] = useState(20);
  const [size, setSize] = useState(`${value}px`);

  const style = {
    fontSize: size,
  };

  useEffect(() => {
    setSize(`${value}px`);
  }, [value]);

  const onClickSizeUp = e => {
    e.preventDefault();

    setValue(value + 1);
  };

  const onCLickSizeDown = e => {
    e.preventDefault();

    setValue(Math.max(1, value - 1));
  };

  return (
    <div className="text-root">
      <h3>Welcome Font Show</h3>
      <div className="text-container">
        <span style={style}>Font</span>
        <div className="button-container">
          <button onClick={onClickSizeUp}>+</button>
          <button onClick={onCLickSizeDown}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeTextSize;
