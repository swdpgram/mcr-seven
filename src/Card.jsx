import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
export function Card({ 
name,
image,
countries
}) { 

const [ backgroundImage, setBackgroundImage ] = useState("")


useEffect(()=> { 
const updateImage = () => { 
    setBackgroundImage(image)
}

updateImage()
},[image])

    return(
        <>
        {
        countries 
        ? 
        <Link to={"/destination/"+name}>
        <div 
        style={{backgroundImage: `url(${backgroundImage})`}}
        className="card"
        > 
        
        </div>

        <div className="names-icons"> 
        <i
              className="material-symbols-outlined"
            //   onClick={() =>deleteRecipe(id)}
            >
              location_on
            </i>
          
        <span> {name} </span>     
        </div>
        </Link>    
        : 
        <Link to={"/countries/"+name }>
        <div 
        style={{backgroundImage: `url(${backgroundImage})`}}
        className="card"
        > 
        
        </div>

        <div className="names-icons"> 
        <i
              className="material-symbols-outlined"
            //   onClick={() =>deleteRecipe(id)}
            >
              location_on
            </i>
          
        <span> {name} </span>     
        </div>
        </Link>    

        }
       
        </>
    ); 
}