import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { Card } from "./Card";
export function ContinentCard({ 
countries,
name,
image
}) { 



    return(

        <div className="home-tiles continent-page"> 
        { 
        countries.map((item,index)=> { 
            return(
                <div key={index} >
                    <Card {...item} /> 
                </div>
            );
        })
        }
        </div>
        
    ); 
}