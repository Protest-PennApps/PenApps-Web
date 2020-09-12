import React from 'react';
import './navigation.css';

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '5x'}}>
            <ul className ="main-nav">
                <li className= "nav-list"><a className="nav" href="/">HOME</a></li>
                <li className= "nav-list"><a className="nav" href="/">EVENTS</a></li>
                <li className= "nav-list"><a className="nav" href="/">ORGANIZE</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;