import React from 'react'
import "./FilterExpenses.css";

const FilterExpenses = (props) => {
  const onChangeHandler=(event)=>{
      console.log(event.target.value);
      props.selectedFilter(event.target.value)
  }
  

    return (
        <div className="expensefilter">
        <p>Select The Year For Filter :</p>
        <select value={props.changeFilter} onChange={onChangeHandler} >
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>
      </div>
    )
}

export default FilterExpenses
