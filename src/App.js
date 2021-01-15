import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path={'/home'} component={Home} />
          <Route path={'/space-ships'} component={Home} />
          <Route path={'/space-missions'} component={Home} />
          <Route path={'/landing-pads'} component={Home} />
          <Redirect to={'/home'} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
