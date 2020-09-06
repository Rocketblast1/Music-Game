import React from "react";
import Game from '../components/Game/Game';
import Rules from "../components/Screens/Rules";
import Settings from "../components/Screens/Settings";
import Songs from "../components/Screens/Songs";
import MainMenu from "../components/Screens/MainMenu";
import {Link, Route, Switch} from "react-router-dom";
import './App.css';
// import { motion } from 'framer-motion';

export default function App() {
  return (
    <div>
        <div className="Links">
          <Link to="/Game" className="linkstyle"><button>Game</button></Link>
          <Link to="/"><button>Main Menu</button></Link>
          <Link to="/Settings"><button>Settings</button></Link>
        </div>
      
       
      <Switch>
        <Route component={Game} path="/Game"/>
        <Route component={Rules} path="/Rules"/>
        <Route component={Settings} path="/Settings"/>
        <Route component={Songs} path="/Songs"/>
        <Route component={MainMenu} path="/"/>
      </Switch>

    </div>
  );
}


