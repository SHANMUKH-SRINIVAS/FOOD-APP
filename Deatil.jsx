import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../Context/Index'
import { useParams } from 'react-router-dom'
import '../../Pages/Recipes/Res.css'
export default function Deatil() {
const {id}=useParams()
  const{receipeDetails,setReceipeDetails,handlefav,favouritesList}=useContext(GlobalContext)
  

async function fetchreceipeDetails(){
  const resp=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
  const data = await resp.json()
  
  if(data?.data)
  {
    setReceipeDetails(data?.data)
  }
}
console.log(receipeDetails)

  useEffect(()=>{
    fetchreceipeDetails()
  },[])
  return (
    <div>
       <div className='detail'>
          <div>
            <img className='imgs' src={receipeDetails?.recipe?.image_url} alt='details'/>
         </div>
      <div className='author1'>
      <div>
        <span style={{color:'blue',fontWeight:'bold'}}>{receipeDetails?.recipe?.publisher}</span>
        <h2 style={{color:'red',fontWeight:'bold',fontSize:'30px'}}>{receipeDetails?.recipe?.title}</h2>
       <button onClick={()=>handlefav(receipeDetails?.recipe)} className='adtofa'>
       {
           favouritesList && favouritesList.length >0 && favouritesList.findIndex(it=>it.id===receipeDetails?.recipe?.id)!==-1?"Remove from Favourite":"Add to Favourites"
       }
       </button>
      </div>
      <div className='ing'>
      <span>Ingrediants:</span>
       <ul>
        {
          receipeDetails?.recipe?.ingredients.map(item=><li  style={{listStyle:'none'}}>
          <span>{item.quantity} {item.unit}</span>
          <span>{item.description}</span>
          </li>)
          
        }
       </ul>
      </div>
      </div>
    </div>
    </div>
  )
}
