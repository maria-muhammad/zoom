import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeData = ({headtitle, headtitle2, headSubtitle,headButton,headButtonLink,headImg}) => {
  return (
    <>
      <section className='d-flex align-items-center' id="header">
        <div lassName='container-fluid'>
          <div className='row'>
              <div className='col-10 mx-auto'>
                  <div className='row'>
                      <div className='col-md-6 pt-5 pt-lg-0 boder-2 border-lg-1 d-flex justify-content-center flex-column'>
                          <h1>
                            {headtitle}
                            <strong className='my-3'>{headtitle2}</strong>
                          </h1>

                          <h2 className='my-3'>{headSubtitle}</h2>
                          <div className='mt-3'>
                              <NavLink className="btn btn-get-start" to={headButtonLink}>
                                  {headButton}
                              </NavLink>
                          </div>
                      </div>

                      <div className='col-lg-6 border-2 border-lg-4 border-img'>
                        <img src={headImg} alt="homeimg"  className='img-fluid animated'/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeData
