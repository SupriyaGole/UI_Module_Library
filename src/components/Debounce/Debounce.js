import React, {useState, useCallback} from "react";
import {debounce} from "../../Utils/debounce";
import "./debounce.scss";

const Debounce = () => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  const debouncedFunc = useCallback(
    debounce((inputValue) => setDebouncedText(inputValue), 1000),
    [],
  );

  return (
    <div className="debounce-container">
      Enter Input:
      <input type="text" value={text} name="text" onChange={(value) => {
        const inputValue = value.target.value;
        setText(inputValue);
        debouncedFunc(inputValue);
      }}/>
      {text.length > 0 && <p className="text-before-debounce">Entered Value Before Debounce: {text}</p>}
      {debouncedText.length > 0 && <p className="text-after-debounce">Entered Value After Debounce: {debouncedText}</p>}
    </div>
  );
};

export default Debounce;
