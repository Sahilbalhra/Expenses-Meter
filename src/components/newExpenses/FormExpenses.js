import React, { useState } from "react";
import "./FormExpenses.css";

const FormExpenses = (props) => {
  const [isValid, setIsValid] = useState(true)
  const [formChange, setformChange] = useState({
    title: " ",
    amount: " ",
    date: " ",
  });

  const onTitleChange = (events) => {
    console.log(events.target.value);
    if(events.target.value.trim().length>0){
      setIsValid(true);
    }
    setformChange((prevState) => {
      return { ...prevState, title: events.target.value };
    });
  };
  const onAmountChange = (events) => {
    console.log(events.target.value);
    if(events.target.value.trim().length>0){
      setIsValid(true);
    }
    setformChange((prevState) => {
      return { ...prevState, amount: events.target.value };
    });
  };
  const onDateChange = (events) => {
    console.log(events.target.value);
    if(events.target.value.trim().length>0){
      setIsValid(true);
    }
    setformChange((prevState) => {
      return { ...prevState, date: events.target.value };
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
   if (formChange.title.trim().length === 0) {
     setIsValid(false);
      return
    }
    const addexpenses = {
      title: formChange.title,
      amount: formChange.amount,
      date: new Date(formChange.date),
    };
    props.onSave(addexpenses);
    console.log(addexpenses);
  };

  const onExitBtn = (event) => {
    console.log("btn is click");
    props.onExit(false);
  };

  return (
    <div className="body">
      <form className="form" onSubmit={onSubmitHandler}>
        <div
        //  className="div invalid"
        className={`div ${!isValid?'invalid':''}`}
        >
          <div className="title">
            <label
            //  style={{color:!isValid?'red':'black'}}
             >Title:</label>
            <input
              type="text"
              placeholder="Enter the title"
              onChange={onTitleChange}
              // style={{borderColor:!isValid?'red':'black'}}
            />
          </div>
          <div className="title">
            <label 
            // style={{color:!isValid?'red':'black'}}
            >Amount:</label>
            <input
              type="text"
              placeholder="Enter the Amount"
              onChange={onAmountChange}
              // style={{borderColor:!isValid?'red':'black'}}
            />
          </div>
        </div>
        <div className="div">
          <div className="title">
            <label
             style={{color:!isValid?'red':'black'}}
             >Date:</label>
            <input type="date" onChange={onDateChange} 
             style={{borderColor:!isValid?'red':'black'}}
             />
          </div>
          <button type="submit">Add</button>
          <button type="button" onClick={onExitBtn}>
            Exit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormExpenses;
