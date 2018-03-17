import React from 'react';
import logo from '../assets/logo.svg';
import './Header.css';

export default () => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <h1 className="title">¡Buscá tu producto!</h1>
  </header>
);
