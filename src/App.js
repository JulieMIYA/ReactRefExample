import React from "react";
import "./styles.css";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default function App() {
  const emailRef = React.createRef();

  const onValidate = () => {
    const isValid = validateEmail(emailRef.current.value);
    if (!isValid) {
      emailRef.current.focus();
    }
  };
  return (
    <div className="App">
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" id="email" ref={emailRef} />
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
