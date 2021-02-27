import React, {Component} from 'react';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

export default class Portfolio extends Component {
    
render() {
    return (
        <div>  
            <section id="hero" class="d-flex align-items-center">
                <div class="container d-flex flex-column" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>HEY THERE!</h4>
                            <h1>I'm Alya Maharani</h1>
                            <h5>Software Engineering Student</h5>
                            <div>
                            <a href="https://twitter.com/alyamp_"><Twitter className="socmed-component"  size={20}/></a>
                            <a href="https://twitter.com/alyamp_"><Facebook className = "socmed-component"  size={20}/></a>
                            <a href="https://twitter.com/alyamp_"><Instagram className = "socmed-component"  size={20}/></a>
                            <a href="https://twitter.com/alyamp_"><Linkedin className = "socmed-component"  size={20}/></a>
                            <a href="https://github.com/alyamp"><Github className = "socmed-component"  size={20}/></a>
                            </div>
                            <a class="btn-works">See My Works</a>             
                        </div>
                        <div className="col-lg-6">
                        </div>
                    </div>
                </div>
            </section>  
        </div>
        )
    }
}