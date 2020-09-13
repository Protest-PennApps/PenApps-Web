import React from 'react';
import './navigation.css';

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <a className='a  dim  pa3 pointer' href="/">HOME</a>
            <a className='a  dim  pa3 pointer' href="/event">EVENTS</a>
            <a className='a  dim  pa3 pointer' href="/">ORGANIZE</a>
        </nav>
    );
}

export default Navigation;