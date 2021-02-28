import React from 'react';
import s from './Period.module.css';
import {setStartDatePeriod} from "../../../redux/period-reducer";
import {setEndDatePeriod} from "../../../redux/period-reducer";
import {setYearCreator} from "../../../redux/year-reducer";
import {setLeagueSchedule} from "../../../redux/leagues-reducer";
import {setTeamSchedule} from "../../../redux/teams-reducer";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import {compose} from "redux";
import 'react-datepicker/dist/react-datepicker.css';

class Period extends React.Component {


  update =() => {
    this.props.setStartDatePeriod(new Date(this.props.year+"/01/01"));
    this.props.setEndDatePeriod(new Date(this.props.year+"/12/31"));
  } 

  componentDidMount(prevProps) {
    this.update();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.year !== this.props.year){
      this.update();
    }
  }

  render() {
 
    let setStartDate = (date) => {
      this.props.setStartDatePeriod(date);	
    }

    let setEndDate = (date) => {
      this.props.setEndDatePeriod(date); 
    }
  
    const minDate=this.props.year+"/01/01";
    const maxDate=this.props.year+"/12/31";

    return <>    
      <div className={s.date_filter_area}>
        <div className={s.date_filter}>
          <div className={s.title}>C:</div>
          <DatePicker className={s.DatePicker}
            dateFormat="yyyy-MM-dd"
            selected={this.props.startDate}
            onChange={setStartDate}
            peekNextMonth
            showMonthDropdown
            minDate={new Date(minDate)}
            maxDate={new Date(maxDate)}
            selectsStart
            startDate = {this.props.startDate}
          />
        </div>
        <div className={s.date_filter}>
          <div style={{marginRight:'4px'}} className={s.title}>По:</div>
          <DatePicker className={s.DatePicker}
            dateFormat="yyyy-MM-dd"
            selected={this.props.endDate}
            onChange={setEndDate}
            peekNextMonth
            showMonthDropdown
            minDate={new Date(minDate)}
            maxDate={new Date(maxDate)}
            selectsEnd
            endDate = {this.props.endDate}
          />
        </div>
      </div> 	
  </>
  }
}

let mapStateToProps = (state) => ({
    year:state.year,
    startDate : state.period.startDate,
    endDate : state.period.endDate,
})

export default compose(connect(mapStateToProps,{setStartDatePeriod}),
               connect(mapStateToProps,{setEndDatePeriod}),
               connect(mapStateToProps,{setYearCreator}),
               connect(mapStateToProps,{setLeagueSchedule}),
               connect(mapStateToProps,{setTeamSchedule})
)(Period); 