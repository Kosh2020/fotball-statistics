import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.css';


const Navbar = (props) => {
 
  let sections=props.sections;
  let menuItemList=sections.map((item,index) => ( 
              <li key={item.index}> <NavLink key={item.index} className="menu__item" to={item.href+"/"+props.period}>{item.title}</NavLink></li> ));

	return(
    <div className="nav-bar">
      <div className={s.hamburger_menu}>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          {menuItemList}
        </ul>
      </div>
    </div>
    )
}

export default Navbar;