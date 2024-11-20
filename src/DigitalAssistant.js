import React from 'react'
import PropTypes from 'prop-types'

const DigitalAssistant = (props) => {
  return (
    <div>
        <p>Title is {props.title} </p>
        <p>Handel is {props.handel} </p>
    </div>
  )
}
DigitalAssistant.propTypes = {  
    title: PropTypes.string

}
DigitalAssistant.defaultProps = {
    title: "Claude",
    handel: "@chat.openai.com"
}

export default DigitalAssistant