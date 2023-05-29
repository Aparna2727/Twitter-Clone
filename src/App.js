
import './App.css';
import Data from './Data';
import SignUp from './Pages/SignUp/signUp';
import CreateAccount from './create account';
import signUp from './Pages/SignUp/signUp';

function App() {
  return (
    <div className="App">
      
     <h1>App page</h1>
     {/* <Data/> */}
     <CreateAccount/>
     <signUp/>
     
    <SignUp/>
      
    </div>
  );
}

export default App;
