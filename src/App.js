
import './App.css';
import Data from './Data';
import CreateAccount from './create account';
import signUp from './Pages/SignUp/signUp';

function App() {
  return (
    <div className="App">
      
     <h1>App page</h1>
     {/* <Data/> */}
     <CreateAccount/>
     <signUp/>
     
    
      
    </div>
  );
}

export default App;
