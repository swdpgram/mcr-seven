import { data } from "../data"
import { Card } from "../Card"
export function Home() { 
    return(
        <div className="home-container">

        <div className="home-title">
            <h1 className="title"> Welcome to Trip Advisor </h1>
            <p className="sub-title"> Top Continents for your next holiday </p>
        </div>

        <div className="home-tiles"> 
          { 
          data.continents.map((item)=> { 
            return(
                <div key={item.id}>
                <Card {...item} />
                </div>
            );
          })
          }
        </div>

        </div>
    );
}