import React, { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import ListView from './components/ListView';
import MockDetails from './details/Details';
import mock from './mock';
import MockTable from './table/Table';

const App = () => {
  const data = useMemo(() => mock, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MockTable data={data} />
          </Route>

          <Route exact path="/list" component={ListView} />

          <Route
            path="/:recordId"
            // eslint-disable-next-line react/no-children-prop
            children={(props) => (
              // eslint-disable-next-line react/prop-types
              <MockDetails id={Number(props.match?.params.recordId)} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
