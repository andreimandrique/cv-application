import { useState } from "react";

function Display({ isRegistered, children }) {
  if (!isRegistered) {
    return null;
  }

  return <>{children}</>;
}

function Input() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(true);

  function handleName() {
    console.log(value);

    setShow(true);
    setShowInput(false);
  }

  function handleEdit() {
    setShow(false);
    setShowInput(true);
  }

  return (
    <>
      <Display isRegistered={showInput}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button onClick={handleName}>Submit</button>
      </Display>

      <Display isRegistered={show}>
        <h1>{value}</h1>
        <button onClick={handleEdit}>Edit</button>
      </Display>
    </>
  );
}

export default Input;
