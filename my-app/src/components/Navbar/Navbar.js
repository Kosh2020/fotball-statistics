import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render(){
    let sections=this.props.sections;
    let year="";

    let league_href = "";
    let team_href = "";

    if ((this.props.league_id !== null)&(this.props.league_id !== undefined)) { league_href = this.props.league_id;}
    if ((this.props.team_id !== null)&(this.props.team_id !== undefined)) {team_href = "/"+this.props.team_id};


    let menuItemList=sections.map((item,index) => ( 
        <li key={item.index}> <NavLink activeClassName="active" key={item.index} className="menu__item"  to={item.href+'/'+league_href+team_href}>{item.title}</NavLink></li> ));

	   return<>
        <div className="nav-bar">
          <div className={s.hamburger_menu}>
            <input id="menu__toggle"  type="checkbox"    />
              <label className="menu__btn"  for="menu__toggle"  >
                <span></span>
              </label>
              <ul className="menu__box">
                {menuItemList}
              </ul>
          </div>
        </div>
     </>
  }
}
export default Navbar;