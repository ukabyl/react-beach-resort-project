import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

export default  class Navbar extends Component {
    state = {
        isOpen: false
    }

    toggleHandler = () => {
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
    }

    render() {

        const { isOpen } = this.state;
        let navClassses = 'nav-links';

        if (isOpen) {
            navClassses += ' show-nav';
        }

        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                        <button 
                            className="nav-btn" type="button"
                            onClick={this.toggleHandler}
                            >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul 
                        className={navClassses}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms/">Rooms</Link>
                        </li>
                    </ul>  
                </div>
            </nav>
        );
    }
}
