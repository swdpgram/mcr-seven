import "./App.css";
import { Home } from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import { ContinentPage } from "./ContinentPage";
import { DestinationPage } from "./DestinationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:name" element={<ContinentPage />} /> 
        <Route path="/destination/:name" element={<DestinationPage />} /> 
      </Routes>
    </>
  );
}

export default App;
