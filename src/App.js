import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Landing from './components/Landing';
import {Switch,Route} from 'react-router-dom'
import Cms from './components/cms';
import { PreguntasProvider } from './components/context/PreguntasContext';

function App() {
  return (
    <>  
    <PreguntasProvider>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/signin"  component={SignIn}></Route>
          <Route path="/signup"  component={SignUp}></Route>
          <Route path="/cms"  component={Cms}></Route>
        </Switch>
      </PreguntasProvider>
    </>
  );
}

export default App;
