import React from 'react';
import * as style from './Header.module.css';

function Header() {
  return (
    <header
      className={`${style.header} ${true ? style.headerSuccess : ''}`}
    >
      <h1>Header</h1>
    </header>
  );
}

export default Header;
