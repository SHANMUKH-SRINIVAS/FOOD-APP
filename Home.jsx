import React, { useContext } from 'react'
import Recipes from '../Recipes/Recipes';
import { GlobalContext } from '../../Context/Index';
import '../../Pages/Recipes/Res.css'




export default function Home() {
  const{rescipes,load}=useContext(GlobalContext);
  if (load)return <h2>Loading....Please Wait</h2>
  return (
    <div className='Home-recipies'>

      {
        rescipes && rescipes.length>0 ?
        rescipes.map(item=><Recipes item={item}/>)
        
        :<div><h2>Nothing to show Please search Another...</h2></div>
      }
    </div>
  )
}
