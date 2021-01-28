import React, { Component } from 'react'; 
import './Header.css'; 

class Header extends Component {
    render() {
        return (
            <div className="nav">
                <i class="fas fa-calendar-week"></i>
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>

            
        )
    }
}

export default Header; 