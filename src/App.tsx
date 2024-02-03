import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
 import Login from './components/login/Login';
import Register from './components/register/Register';
import { userInterface, userModel } from './components/constants/constant';
function App() {
  const [userstate, setUserState] = useState<userInterface>(userModel);;
  return (
    <div className="App">
     <Router>
     <Routes>
      <Route path='/' element= {
        (userstate && userstate._id) ? (<div></div>) :(<Navigate to="/login"/>)
      }
      ></Route>
      <Route path='login' element={<Login setUserState={setUserState} />}></Route>
      <Route path='register' element={<Register/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
