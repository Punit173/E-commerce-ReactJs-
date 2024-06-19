import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const favlist = useSelector(store => store.cartreducer)



  return (
    <div>

    </div>
  )
}

export default Home
