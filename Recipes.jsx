import React from 'react'
import './Res.css'
import { Link } from 'react-router-dom'

export default function Recipes({item}) {
  return (
    <div className='container'>
    <div className='images'>
      <div>
         <img src={item.image_url} alt='item'/>
      </div>
      <div className='author'>
        <span>{item?.publisher}</span>
        <h2>{item?.title}</h2>
        <Link to={`/Recipes/${item?.id}`} className='linkk'>Receipe Details</Link>
      </div>
      </div>
      
    </div>
  )
}
