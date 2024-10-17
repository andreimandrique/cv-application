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

  function handleName() {
    console.log(value);

    setShow(true);
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <button onClick={handleName}>Submit</button>

      <Display isRegistered={show}>
        <h1>{value}</h1>
      </Display>
    </>
  );
}

export default Input;
