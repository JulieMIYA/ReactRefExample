import React from 'react';

function withStatusMessages(WrappedComponent) {
  return ({
    errorText,
    successText,
    ...props
  }) => {
    return (
      <>
      <WrappedComponent {...(props)} />
        {errorText ? <div className="errorText">{errorText}</div> : null}
        {successText ? (
          <div className="successText">{successText}</div>
        ) : null}
      </>
    )
  }
}

export default withStatusMessages;