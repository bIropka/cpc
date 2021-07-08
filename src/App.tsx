import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MockDetails from './details/Details';
import Root from './pages/Root';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Root} />

          <Route
            path="/:recordId"
            // eslint-disable-next-line react/no-children-prop
            children={(props) => (
              <MockDetails id={Number(props.match?.params.recordId)} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
