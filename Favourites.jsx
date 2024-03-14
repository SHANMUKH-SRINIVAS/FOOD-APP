import React, { useContext } from 'react'
import {GlobalContext} from '../../Context/Index'

import Recipes from '../Recipes/Recipes'

export default function Favourites() {
  const{favouritesList}=useContext(GlobalContext);
 
  return (
    <div className='Home-recipies'>

      {
        favouritesList && favouritesList.length>0 ?
        favouritesList.map(item=><Recipes item={item}/>)
        
        :<div><h2>Nothing to show Favourites</h2></div>
      }
    </div>
  )
}
