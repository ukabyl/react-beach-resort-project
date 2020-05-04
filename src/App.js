import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Rooms from './pages/rooms';
import Error from './pages/error';
import SingleRoom from './pages/single-room';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact/>
        <Route path="/rooms/:slug" component={SingleRoom} exact />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
