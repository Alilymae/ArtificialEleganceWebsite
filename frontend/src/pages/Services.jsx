import React from 'react'

//CMPONENTS
import Servicebg from '../Components/Servicebg/Servicebg'
import Servicescomp from '../Components/Servicescomp/Servicescomp'
import Testimonials from '../Components/Testimonials/Testimonials'
import Servicesintro from '../Components/Servicesintro/Servicesintro'

const Services = () => {
  return (
    <div>
        <Servicebg/>
        <Servicesintro />
        <Servicescomp/>
        <Testimonials/>
    </div>
  )
}

export default Services