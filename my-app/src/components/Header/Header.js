import React from 'react';
import s from './Header.module.css';
import Logo from '../../img/logo2.png'

const Header = () => {
	return<>
    	<header className={s.header}>
    		<a href="/fotball-statistics"><img src={Logo} alt="Football statistic" /></a>
    		<div className={s.title}>
      			<h1>Футбольная статистика</h1>
    		</div>
    	</header>
    </>
}

export default Header;