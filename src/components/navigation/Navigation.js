import React from 'react';
import './navigation.css';

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '5x'}}>
            <ul className ="main-nav">
                <li><a href="/">HOME</a></li>
                <li><a href="/">EVENTS</a></li>
                <li><a href="/">ORGANIZE</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;