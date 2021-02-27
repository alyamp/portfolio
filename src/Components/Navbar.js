import React, {Component} from 'react';
import Burger from '@animated-burgers/burger-squeeze' 
import '@animated-burgers/burger-squeeze/dist/styles.css' 
import { Link } from "react-scroll";
export default class Navbar extends Component {
    
state = { isOpen: false };
    
setOpenMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
}

render() {
    let className;
    if (this.state.isOpen == true) {
        className = 'navbar navbar-mobile';
    }else if (this.state.isOpen == false){
        className = 'navbar';
    }
    
    return (
            <div id="header" class="fixed-top">
                <div class="container-fluid d-flex">
                    <nav id="navbar" className= {className}>
                        <ul>
                            <li><Link  to="home" spy={true} smooth={true}>Home</Link></li>
                            <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
                            <li><Link  to="skills" spy={true} smooth={true}>Skills</Link></li>
                            <li><Link  to="experiences" spy={true} smooth={true}>Experiences</Link></li>
                            <li><Link  to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
                            <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
                        </ul>
                        <div class="mobile-nav-toggle">
                            <Burger isOpen = {this.state.isOpen} onClick = {this.setOpenMenu}/>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}