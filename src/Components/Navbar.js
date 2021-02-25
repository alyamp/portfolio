import React, {useState, Component} from 'react';
// React Component
import Burger from '@animated-burgers/burger-squeeze' 
// don't forget the styles
import '@animated-burgers/burger-squeeze/dist/styles.css' 
export default class Navbar extends Component {
    constructor() {
        this.state = {isOpen: false};
    
        // This binding is necessary to make `this` work in the callback
        this.setOpenMenu = this.setOpenMenu.bind(this);
      }

    setOpenMenu() {
        this.setState(state => ({
          isOpen: !state.isOpen
        }));
      }

render() {

    return (
    <div id="header" class="fixed-top">
        <div class="container-fluid d-flex">
            <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div class="mobile-nav-toggle">
                    <Burger isOpen = {this.state.isOpen} onCLick={this.setOpenMenu()}/>
                </div>
            </nav>
        </div>
    </div>
        )
    }
}