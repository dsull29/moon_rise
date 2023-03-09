import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'black',
    color: 'orange',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
  };

  const titleStyle = {
    fontSize: '3rem',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    margin: '0',
    padding: '0',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Moon Rise</h1>
    </header>
  );
};

export default Header;