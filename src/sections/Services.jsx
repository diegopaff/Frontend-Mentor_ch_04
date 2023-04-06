import React from 'react'

import '../scss/sections/_services.scss'

const Services = () => {
  return (
    <div id='Services' className='services-container'>
        <div className="graphic-design service">
            <h2 className="service__title">Graphic Design</h2>
            <p className="service__description">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.</p>
        </div>
        <div className="photography service">
            <h2 className="service__title">Photography</h2>
            <p className="service__description">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
    </div>
  )
}

export default Services