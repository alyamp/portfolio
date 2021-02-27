import React, {Component} from 'react';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

export default class About extends Component {
    
render() {
    return (
        <div>  
            <section id="about" class="d-flex align-items-center">
                <div class="container d-flex flex-column" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row mt-5">
                        <div className="col-lg-6">
                        <h1>ABOUT ME</h1>  
                        </div>
                        <div className="col-lg-6">
                            <p>
                               Alya Maharani Putri Juhana, 
                               <br/>20 y.o.
                               <br/>Just call me Alya.
                               <br/><br/>Software Engineering major
                               <br />at Bandung State Polytechnic.
                               <br/>Well, final semester.
                               <br/><br/>Umm, I have developed some  
                               <br/>web and mobile applications.
                               <br/><br/>And I currently trying to have 
                               <br/>some data science lessons.
                               <br/><br/>Glad to see you. xx
                           </p>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
        )
    }
}