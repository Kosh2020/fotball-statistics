import React from 'react';
import s from './Periods.module.css';
const PERIODS = ['2013/2014', '2014/2015', '2016/2017', '2017/2018', '2018/2019', '2019/2020', '2020/2021'];
/*    console.log('props.period'); console.log(props.period); установить по умолчанию*/
const Periods = (props) => {
  let periodElement = React.createRef();	
  
  const ListPeriods=PERIODS.map((p) => <option value={p}>{ p }</option>);
  let selectPeriod = () => {
  	let text = periodElement.current.value; console.log(text);
  	props.setPeriod(text);
  	
  }
 
  return (<div className={s.period}> 
  			<select className="check-period" ref={periodElement} onChange={selectPeriod} value={props.period}>
            	{ListPeriods}
          	</select>
          	
          </div>	);
}//Periods


export default Periods;