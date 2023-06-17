import "./App.css";
import { Route, Routes } from "react-router-dom" 
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignUp_SignIn/SignIn";
import SignUp from "./Components/SignUp_SignIn/SignUp";
import Main from './Components/Home/Main'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home child={<Main/>}/> } /> 
      <Route path="/login" element={<Home child={<SignIn/>}/> } /> 
      <Route path="/register" element={<Home child={<SignUp/>}/> } />
      <Route path="*" element={<h1>Page Not Found</h1>} /> 
    </Routes>
  );
}

export default App;
