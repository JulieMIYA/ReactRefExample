import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  focusInput() {
    this.ref.current.focus();
  }
  handleChange(event) {
    console.log("input", event.target.value);
    this.props.onChange(event.target.value);
  }
  render() {
    const { hasError, ...rest } = this.props;
    return (
      <input
        {...rest}
        onChange={this.handleChange}
        ref={this.ref}
        style={{ shadowColor: hasError ? "red" : "none" }}
      />
    );
  }
}

export default Input;
