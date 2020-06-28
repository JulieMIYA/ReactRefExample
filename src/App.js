import React, { useState } from "react";
import Input from "./InputComponent";
// import FunctionalInput from "./Input";
import "./styles.css";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const emailRef = React.createRef();

  const onValidate = () => {
    console.log(emailRef.current);
    setIsValid(validateEmail(inputValue));
    if (!isValid) {
      // emailRef.current.focus();
      emailRef.current.focusInput();
    }
  };
  return (
    <div className="App">
      <form>
        <label htmlFor="email">Email</label>
        {/* <input name="email" type="text" id="email" ref={emailRef} /> */}
        <Input
          onChange={value => {
            setInputValue(value);
          }}
          value={inputValue}
          name="email"
          type="text"
          id="email"
          ref={emailRef}
          hasError={!isValid}
        />
        {/* <FunctionalInput
          errorText={isValid ? "" : "validation error"}
          name="email"
          type="text"
          id="email"
          ref={emailRef}
        />
        */}
        <label htmlFor="password">password</label>
        <input name="password" type="password" />
        <button
          onClick={onValidate}
          style={{ gridColumn: "span 2" }}
          type="button"
        >
          Validate
        </button>
      </form>
    </div>
  );
}
