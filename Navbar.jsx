import React, { useContext } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from './Context/Index'


export default function Navbar() {
  const{search,setSearch,handlesearch}=useContext(GlobalContext)
  return <nav className='Nav'>
       <h2>
       <NavLink className='FoodRecipe' to={'/'}>FoodRecipe</NavLink>
       </h2>
  <form onSubmit={handlesearch}>
    <input
    type='text'
    name='search'
    placeholder='Enter Items...'
    value={search}
    onChange={e=>setSearch(e.target.value)}
    />
  </form>
  <div>
  <ul className='home-favourite'>
   <li className='li'>
     <NavLink className="link" to={'/'}>Home</NavLink>
   </li>

   <li className='li'>
     <NavLink className="link" to={'/favourite'}>Favourite</NavLink>
   </li>
  </ul>
  </div>
  
  </nav>
}
