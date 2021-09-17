import React from 'react'; 
import ConstructionShiba from '../images/construction-shiba-inu.svg'

function Loading() {
  return (
    <div className="container_error">
      <img src={ConstructionShiba} className="loading-graphic"/>
      <p>Blogs loading!</p>
    </div>
  )
}

export default Loading