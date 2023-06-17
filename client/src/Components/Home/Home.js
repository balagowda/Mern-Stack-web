import React from 'react'
import NavBar from '../Header/NavBar'
import UnderNav from '../Undernav/UnderNav'
import Footer from '../Footer/Footer'

const Home = ({child}) => {
  return (
    <>
      <NavBar />
      <UnderNav />
      {child}
      <Footer />
    </>
  )
}

export default Home
