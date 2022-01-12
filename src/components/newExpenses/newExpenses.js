import React from 'react'
import FormExpenses from './FormExpenses'

const NewExpenses = (props) => {
    const onAddExpenes=(data)=>{
        console.log("in new expenses"+data);
        props.addNewExpenses(data);
    }
    const onExitClick=(data)=>{
        props.exitResponse(data);

    }
    return (
        <div>
            <FormExpenses onSave={onAddExpenes} onExit={onExitClick}/>
        </div>
    )
}

export default NewExpenses
