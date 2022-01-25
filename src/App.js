// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";

// Layout Component
import Layout from "./Layout";

// Assets
import "./styles/App.sass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} /> 
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>  
  );
}

export default App;
