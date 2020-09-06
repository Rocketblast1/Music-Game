import React, { Component } from 'react'
import "./MainMenu.css"

export default class MainMenu extends Component {
    render() {
        return (
            <div className="MainMenu" id="MainMenu">
                <h2> MAIN MENU</h2>
                <div>
                    <img alt="MainMenuImage" src="https://picsum.photos/200">
                    </img>
                </div>
            </div>
        )
    }
}
