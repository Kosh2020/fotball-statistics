import React from 'react';
import s from './Year.module.css';
import {setYearCreator} from "../../../redux/year-reducer";
const YEARS = ['2000', '2001', '2002', '2003','2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012','2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];


const Years = (props) => {	
  
  const ListYears=YEARS.map((p) => <option value={p}>{ p }</option>);

  let selectYear = (e) => {
    let text = e.target.value; 
    let action = setYearCreator(text);
  	props.dispatch(action); 	
  }
 
  return <>
    <div className={s.year}> 
  	 	<select className={s.check_year} onChange={selectYear} value={props.year}>
       	{ListYears}
     	</select>
    </div>	
  </>
}


export default Years;