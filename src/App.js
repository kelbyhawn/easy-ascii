import { Routes, Route } from "react-router-dom";
import "./styles/App.sass";

import Layout from "./Layout";
import Popular from "./components/Popular";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="popular" element={<Popular />} />
      </Route>  
    </Routes>
    
  );
}

export default App;
