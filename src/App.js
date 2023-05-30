import "./App.css";

import Data from "./Data";
import CreateAccount from "./Pages/Create account/Createaccount";
import SignUp from "./Pages/SignUp/signUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route exact path="/Createaccount"  element={<CreateAccount/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
