import React from 'react'
import './HomeData'
import HomeData from './HomeData'
import home from '../assets/react.svg'

const About = () => {
  return (
    <>
    <HomeData
    headtitle={'About'}
    headtitle2 = {'Us'}
    headSubtitle = {'As a leading IT company in Kano Nigeria  we are providing website development and other stuffs'}
    headButton = {'Connect Now'}
    headButtonLink = {'/contact'}
    headImg = {home}
    />
    </>
  )
}

export default About
