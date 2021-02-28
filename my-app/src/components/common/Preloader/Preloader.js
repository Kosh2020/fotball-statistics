import React from 'react';
import s from './Preloader.module.css';
import preloader from "../../../img/teams.png";

const Preloader = (props) => {
      return (<div style={ {backgroundColor: 'white'} }> 
  			   <img src={preloader} />
      </div>	);
}

export default Preloader;