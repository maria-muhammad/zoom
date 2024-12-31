import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({cardImg, cardTitle, cardSubTitle}) => {
  return (
    <>
    <div className='col-md-4 col-10 mx-auto' id='servicesCard'>
      <div className='card'>
      <img src={cardImg} alt={cardTitle} className='card-img-top' />

      <div className='card-body'>
        <h5 className='card-title fw-bold'>
          {cardTitle}
        </h5>
        <p className='card-text'>{cardSubTitle}</p>
        <NavLink to="/" className="btn btn-get-started">
        Go Somewhere
        </NavLink>
      </div>
      </div>
    </div>
    </>
  )
}

export default Card
