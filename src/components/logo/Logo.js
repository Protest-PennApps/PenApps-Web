import React from 'react';
import './Logo.css';
import ProtestLogo from './ProtestLogo.svg';

const Logo = () => {
    return (
        <div className= 'ma4 mt0'>
            <div className="logo-inner pa2"><img className= "logo-image" style={{paddingTop: '5x'}}src={ProtestLogo} alt='logo'></img></div>
        </div>
    );
}

export default Logo;