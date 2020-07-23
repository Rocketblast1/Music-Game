import React, { Component } from 'react'

export default class Screens extends Component {
    state = {
        screens: ["MainMenu" , "Rules", "Songs", "Settings", "Game"],
        currentScreen: false,
        size: ["height","width"]
        // previousScreen:
    }
    Screens(props){
        super(props)
        this.props = this.props.state.screens;
        this.prevScreen = null;
    }

    render() {
        if(this.props.currentScreen){
            return (
                <div>
                    HALLO
                </div>
            )
        }
        
    }
}
