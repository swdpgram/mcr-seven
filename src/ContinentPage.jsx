import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "./data"
import { ContinentCard } from "./ContinentCard"
export function ContinentPage() { 

    const { name } = useParams(); 

   useEffect(()=> { 

     const continentData = () => { 
       const individualContinentData = data.continents.filter((continent)=>continent.name===name)
       console.log(individualContinentData)
    setCountries(individualContinentData)
     }

     continentData(); 
   },[name]); 

   const [ countries, setCountries] = useState([]); 

    return (
        <>
        <Link to="/"> 
        <i
              className="material-symbols-outlined"
              id="home-icon"
            //   onClick={() =>deleteRecipe(id)}
            >
              home
            </i>
        Go to Home 
        </Link>

        Continent Page for {name}

    { 
    countries.map((item,index)=> { 
        return(
            <div key={index}>
                <ContinentCard {...item} /> 
            </div>
        ); 
    })
    }

        </>
    ); 
}