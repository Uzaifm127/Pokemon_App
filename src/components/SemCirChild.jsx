import React from 'react'

function SemCirChild(props) {
  return (
    <div id={props.id}>
        <h4>{props.headingContent}</h4>
        <p>{props.paragraphContent}</p>
    </div>
  )
}

export default SemCirChild