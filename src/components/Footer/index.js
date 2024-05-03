import React from 'react';

function Footer() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: 'lightcyan',
        height: '80px',
        width: '100%',
      }}
    >
      This is Footer
    </div>
  );
}

export default Footer;
