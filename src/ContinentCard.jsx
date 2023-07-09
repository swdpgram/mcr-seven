import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
export function ContinentCard({ 
countries,
name,
image
}) { 

const [ backgroundImage, setBackgroundImage ] = useState("")


useEffect(()=> { 
const updateImage = () => { 
    setBackgroundImage(image)
}

updateImage()
},[image])

    return(
        <Link to={"/destinations/"+name}>
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
    ); 
}