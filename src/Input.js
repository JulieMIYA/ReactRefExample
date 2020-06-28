import React from "react";
import withStatusMessages from "./withStatusMessages";

const Input = withStatusMessages(function Input({
  name,
  type,
  id,
  disabled,
  inputRef,
  ...props
}) {
  return (
    <input
      {...props}
      name={name}
      id={id}
      disabled={disabled}
      type={type}
      ref={inputRef}
    />
  );
});

export default React.forwardRef((props, ref) => {
  return <Input {...props} inputRef={ref} />;
});
