import React, { Component} from 'react'
import {motion} from 'framer-motion'
import Timer from '../Parts/Timer'
import BarGrid from '../Parts/BarGrid'
import './Game.css'

// import {Link, Route, Switch} from "react-router-dom";
// import useState from 'react'

export default class Game extends Component {  

    render() {
        return (
            <div id="Game">
                <div className="app-container">
                    <div className="header-container">
                        <h1>This Is The Game</h1>
                        <Timer></Timer>
                    </div>
                    
                    <BarGrid>
                    </BarGrid>
                </div>
            </div> 
        ) 
    }
}
