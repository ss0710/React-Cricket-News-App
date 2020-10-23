import React from 'react';
import Data from './Components/matches/Data';
import './Components/matches/App.css';
import Player from './Components/players/Player';
import {Route , Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>CRICKET UPDATES</h1>
    <Link to="/matches"><button className="Router-button">View Upcoming Matches</button></Link><br/>
    <Link to="/players"><button className="Router-button">Search A Player</button></Link>
    <Switch>
    <Route exact path='/matches' component={Data}/>
    <Route path='/players' component={Player}/>
    </Switch>
    </div>
  );
}

export default App;
