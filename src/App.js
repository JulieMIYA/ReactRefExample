import React, { useState, useEffect } from "react";
import FunctionalInput from "./Input";
import "./styles.css";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default function App() {
  const [isValid, setIsValid] = useState(true);
  const emailRef = React.createRef();

  const onValidate = () => {
    console.log(emailRef.current.value, validateEmail(emailRef.current.value));
    setIsValid(validateEmail(emailRef.current.value));
  };
  useEffect(() => {
    if (!isValid) {
      emailRef.current.focus();
    }
  }, [isValid, emailRef]);
  return (
    <div className="App">
      <form>
        <label htmlFor="email">Email</label>
        <FunctionalInput
          errorText={isValid ? "" : "validation error"}
          name="email"
          type="text"
          id="email"
          ref={emailRef}
        />

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
