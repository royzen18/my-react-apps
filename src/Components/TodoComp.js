import React from 'react'
import Select from 'react-select'
import { useState } from "react";
import makeAnimated from 'react-select/animated';
import { MDBCard, MDBCardHeader, MDBContainer } from "mdbreact";

function TodoComp() {

    //declare const variables to initialize state property
    const [value, setValue] = useState('');
    const [todoVal, setTodoVal] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [newJoiner, setNewJoiner] = useState([]);
    const [skills, setSkills] = useState([]);

    const animatedComponents = makeAnimated();

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
        let selectDefaultVal = '';
        let resetSelect = '';
        if (selectDefaultVal == selectedOption.toString()) {
            setSelectedOption(resetSelect);
        } else {
            setSelectedOption(selectedOption);
        }

    }
    function addJoiner(e) {
        e.preventDefault();
        const addValue = value;
        const addSelectVal = selectedOption;
        const obj = { 'fname': addValue, 'skills': addSelectVal };


        setNewJoiner(newJoiner => [...newJoiner, obj]);
        setSelectedOption('');
        setValue('');

    }



    const onChange = (e) => {
        setValue(e.target.value);
        console.log("VALUE: " + value);
    }

    const Todo = (e) => {
        setTodoVal(e.target.value);
        console.log("todoVal VALUE: " + todoVal);

    }
    function addTodo(e) {
        e.preventDefault();
        const newData = {
            "value": todoVal, "label": todoVal
        };
        console.log('SKILLS: ' + skills);
        setSkills(skills => [...skills, newData]);
        console.log(JSON.stringify(newData));
        console.log(JSON.stringify(selectedOption));
        console.log(skills);
        setTodoVal('');
    }

    return (
        <MDBContainer className='md-container'>
            <MDBCard className='card-body'>
                <MDBCardHeader className="md-header">
                    My To Do App
                </MDBCardHeader>

                <div><p>Name:
                    <input type='text' name='name' value={value}
                        onChange={onChange} /></p></div>
                <div> <p>Add To Do:
                    <input type='text' name='todo' value={todoVal}
                        onChange={Todo} />
                    <button onClick={(e) => { addTodo(e) }}>Add</button>
                </p></div>
                <div className="add-skill">
                    <p>Select To Do:</p>
                    <Select className="add-skill_select"
                        onChange={handleChange}
                        value={selectedOption}
                        components={animatedComponents} options={skills} isMulti

                    />
                    <button className="add-skill_btn" disabled={!(selectedOption && value)} id="addBtn" onClick={(e) => { addJoiner(e) }}>Add</button></div>
                <div className="flex-row">
                </div>
                <div className="content">

                    <React.Fragment>
                        {
                            newJoiner.map(newJoiner => (
                                <React.Fragment key={newJoiner.fname}>
                                    <p>Name: {newJoiner.fname} </p>
                                    <h1>To Do List</h1>
                                    <ul>
                                        {newJoiner.skills.map((skills, jdx) => (
                                            <li key={jdx}>
                                                <span>{skills.value}</span>
                                            </li>))
                                        }
                                    </ul>

                                </React.Fragment>
                            ))}
                    </React.Fragment>
                </div>
            </MDBCard>
        </MDBContainer >
    );


}
export default TodoComp;
