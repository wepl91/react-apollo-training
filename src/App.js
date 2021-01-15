import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomeView from './views/home';
import SpaceShipsView from './views/space-ships'; 
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path={'/home'} component={HomeView} />
          <Route path={'/space-ships'} component={SpaceShipsView} />
          <Route path={'/space-missions'} component={HomeView} />
          <Route path={'/landing-pads'} component={HomeView} />
          <Redirect to={'/home'} component={HomeView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
