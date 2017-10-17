import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron" style={{ textAlign: "center" }}>
                <p>
                    New York Times!!!
                </p>
                <NavLink to="/" style={{ padding: 10 }}>
                    Search!
                </NavLink>
                <NavLink to="/savedarticles">
                    Saved Articles
                </NavLink>
            </div>
        );
    }
}

export default Header;