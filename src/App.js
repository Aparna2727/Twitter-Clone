
import './App.css';
import {Route, Routes} from 'react-router-dom';
// import Data from './Data';
import CreateAccount from './create account';
import SignUp from './Pages/SignUp/signUp';


function App() {
  return (
    <div className="App">
      
    
     {/* <Data/> */}
     {/* <Routes> 

     <Route path='/createAccount' element = {<CreateAccount/>}/>
     <Route path='/signUp' element = {<SignUp/>}/>

     </Routes>
      */}
    <SignUp/>
      
    </div>
  );
}

export default App;
