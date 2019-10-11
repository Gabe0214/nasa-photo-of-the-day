import React from "react"

const CardInfo = props => {

   return (
       <div className = 'card'>
         <img src = {props.image}/>
         <h2>Photo Of The Day</h2>
         <p>Copyright: {props.copyright}</p>
         <p> Title : {props.title}</p>
         <p> Description: {props.description} </p> 
       </div>
   )

}

export default CardInfo