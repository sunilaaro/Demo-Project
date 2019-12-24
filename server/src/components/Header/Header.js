import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import logoImg from '../../assets/images/logo-1.png';
import Search from './Search/Search';
import Navigation from './Navigation/Navigation';

const header = (props)=>(
    <header className="header">
      <div>
         <Logo img={logoImg} alt="Logo"/>
      </div>
      <Search />
      <Navigation />
    </header>
);

export default header;