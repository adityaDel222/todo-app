import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={ linkStyle } to="/">Home</Link>
            <span style={{ margin: '0 10px' }}>|</span>
            <Link style={ linkStyle } to="/about">About</Link>
        </header>
    );
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff'
};

export default Header;