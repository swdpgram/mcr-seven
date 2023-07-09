export function DestinationPage() { 
    return(
        <>
         <Link to="/" className="link-to-home">
        
        <i
          className="material-symbols-outlined"
          id="home-icon"
        >
          home
        </i>
        <span> Go to Home </span>
      </Link>

      <p> Destination Page </p>
        </>
    ); 
}