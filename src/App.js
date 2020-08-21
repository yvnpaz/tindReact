import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/chats">
            <h1>I'm chatpage</h1>
          </Route>
          {/* !important the default page must be in the end */}
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{/* Header */ }
{/* Tinder Cards */ }
{/* Buttonns below tinder cards */ }
{/* Chats screen */ }
{/* Individual chat screen */ }