import Register from "./components/auth/register";
import Login from "./components/auth/login";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PrivateRoute from "./components/routes/privateRoute";
import FallbackRoute from "./components/routes/fallbackRoute";
import Root from "./components/root";

function App() {

  return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path = '/' exact component = {Root}/>
          <Route path = '/login' component={Login}/>
          <Route path = '/register' component={Register}/>
          <FallbackRoute path = '*' component = {Root}/>
        </Switch>
      </BrowserRouter>
  )

}

export default App;
