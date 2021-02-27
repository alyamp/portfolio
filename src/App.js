import Navbar from './Components/Navbar';
import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default class App extends Component {
    render() {
      return (
      <div>
        <Navbar />
        <div  id="home">
          <Home/>
        </div>
        <div  id="about">
          <About/>
        </div>
        <div  id="skills">
          <Skills/>
        </div>
        <div  id="experiences">
          <Experiences/>
        </div>        
        <div  id="portfolio">
          <Portfolio/>
        </div>
        <div  id="contact">
          <Contact/>
        </div>
      </div>
    );
  }
}