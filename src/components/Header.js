import React from 'react';
import './styles/Header.css';
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';

const Header = () => {
    return(
       <header className= "main-header">
            <Navigation />
            <Logo />
            <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100"/>
            </svg>
       </header>
    )
}

export default Header;