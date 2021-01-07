import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import StartPage from './component/StartPage';
import MainPage from './component/MainPage';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Quiz from './component/Quiz';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/home" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
