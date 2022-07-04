import React from 'react'

const Button = (props) => {
  return (
    <React.Fragment>
        <button type={props.type|| 'button'} className="btn btn-warning" onClick={props.onClick}>{props.children}</button>
    </React.Fragment>
  )
}

export default Button