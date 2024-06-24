import React from 'react'
import { useSelector } from 'react-redux'
import Hometemp from './Hometemp'


const Home = () => {

  const favlist = useSelector(store => store.reducer)

  const compo = favlist.items.map((e) => {
    return (
      <div className='col-md-4'>
        <Hometemp key={e.id} element={e}/>
      </div>
    )
  })



  return (
    <div className="container">
      <div className="row">{compo}</div>
    </div>
  )
}

export default Home
