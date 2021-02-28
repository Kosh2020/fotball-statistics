import React from 'react';
import s from './Header.module.css';
import Logo from '../../img/logo.png'

const Header = () => {
	return(
    <header className={s.header}>
    <img src={Logo}  />
    <div className={s.title}>
      <h1>Футбольная статистика</h1>
    </div>
    </header>
    )
}

export default Header;