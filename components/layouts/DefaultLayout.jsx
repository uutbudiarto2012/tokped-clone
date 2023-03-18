import React from 'react'
import Header from '../meta/Header'
import Navbar from '../molecules/Navbar'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default DefaultLayout
