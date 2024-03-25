import './App.css';
import { Route,Routes,Navigate } from "react-router-dom";
import SignUp from './components/signup/SignPage';
import { LogIn } from './components/Login/LogIn';
function RootApp() {
  // const user =localStorage.getItem("token")
  return (
    <Routes>
      <Route path="/signup" exact element={<SignUp/>}/>
      <Route path="/login" exact element={<LogIn/>}/>
     

    </Routes>
  );
}

export default RootApp;
