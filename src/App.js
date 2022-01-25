// Dependencies
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout Component
import Layout from "./Layout";

// Assets
import "./styles/App.sass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> 
    </Router>  
  );
}

export default App;
