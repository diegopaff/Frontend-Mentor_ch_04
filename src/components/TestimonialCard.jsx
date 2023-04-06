import React from 'react'

import '../scss/components/TestimonialCard.scss';

const TestimonialCard = (info) => {


  console.log(info.avatar);
  return (
    <div className='testimonial'>
        <img className='testimonial__avatar' src={info.avatar}/>
        <p className='testimonial__description'>{info.testimonial}</p>
        <h4 className='testimonial__name'> {info.name}</h4>
        <p className="testimonial__position">{info.position}</p>


    </div>
  )
}

export default TestimonialCard