import React from 'react'
import CardData from './CardData'
import Card from './Card'

const Service = () => {
  return (
   <>
   <div className='my-5'>
    <h1 className='text-center'>
      Our Services
    </h1>
   </div>
   <div className='container-fluid mb-5'>
      <div className='row'>
          <div className='col-12 col-lg-8 mx-auto'>
              <div className='row py-4'>
                  {CardData.map((value,index)=>{
                      return(
                        <Card 
                        key={index}
                        cardImg={value.imgsrc}
                        cardTitle={value.title}
                        cardSubTitle={value.subTitle}
                        
                        />
                      )
                  })}
              </div>
          </div>
      </div>
   </div>
   </>
  )
}

export default Service
