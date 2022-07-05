import React from 'react'

const Button = (props) => {
  return (
    <React.Fragment>
        <button type={props.type|| 'button'} className="custom__button" onClick={props.onClick}>{props.children}</button>
    </React.Fragment>
  )
}

export default Button