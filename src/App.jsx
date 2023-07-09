import "./App.css";
import { Home } from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import { ContinentPage } from "./ContinentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:name" element={<ContinentPage />} /> 
      </Routes>
    </>
  );
}

export default App;
