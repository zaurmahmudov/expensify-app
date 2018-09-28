import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from '../actions/filters';


class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    };
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}))
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => (
                    // store.dispatch()
                    this.props.dispatch(setTextFilter(e.target.value))
                )} />
                <select onChange={(e) => (
                    e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount()) 
                    // let myaction = e.target.value + '()'; 
                    // props.dispatch(e.target.value)
                )}> 
                    <option value='date' >Date</option>
                    <option value='amount'>Amount</option> 
                </select>
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput= {this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);