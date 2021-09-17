import React from 'react';
import ConfusedShiba from '../images/confused-shiba-inu.svg'

function Error() {
  return (
    <div className="container_error">
      <img src={ConfusedShiba} className="error-graphic"/>
      <p>There was an error! Try again later.</p>
    </div>
  )
}

export default Error