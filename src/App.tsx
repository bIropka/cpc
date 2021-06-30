import React, {useMemo} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import mock from './mock';
import MockTable from "./table/Table";
import MockDetails from "./details/Details";

const App = () => {
    const data = useMemo(() => mock, []);
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MockTable data={data}/>
                    </Route>
                    <Route path="/:recordId"
                           children={props => <MockDetails id={Number(props.match?.params.recordId)}/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
