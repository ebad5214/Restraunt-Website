import React, { useState } from 'react'

import Button from '../../../Components/Register_Components/Button'
import Modal from '../../../Components/Register_Components/Modal'
import './BookTable.css'

const BookTable = (props) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const formSubmitHandler = event => {
       event.preventDefault();
       if(name.trim().length === 0){
           setError({
               title: "This field can't be empty",
               message: "Please Enter your Name !"
           })
           return;
       }
       if(email.trim().length === 0){
           setError({
            title: "This field can't be empty",
            message: "Please Enter your e-Mail !"
           })
           return;
       }
       if(number.length === 0){
           setError({
            title: "This field can't be empty",
            message: "Please Enter your Mobile Number !"
           })
           return;
       }else if(number.length > 10){
           setError({
               title: "Invalid Input",
               message: "Mobile number cannot exceed more than 10 Character !"
           })
           return;
       }
       if(!date){
           setError({
               title: "Date is required",
               message: "Please Select a Date !"
           })
           return;
       }
       if(!time){
           setError({
               title: "Time is required",
               message: "Please chose a time !"
           })
           return;
       }
       console.log(name,number,email,date,time)
        props.onAddUser(name,number,email,date,time)
    
       setName("")
       setNumber("")
       setEmail("")
       setDate("");
       setTime("")
    }
     
    const inputName = event => {
        setName(event.target.value)
    }
    const inputNumber = event => {
        setNumber(event.target.value)
    }
    const inputEmail = event => {
        setEmail(event.target.value)
    }
    const inputDate = event => {
        setDate(event.target.value)
    }
    const inputTime = event => {
        setTime(event.target.value)
    }
    

  return (
    <div className="app__bg app__wrapper">
    {error && (
      <Modal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />
    )}
    <div className="container-fluid">
      
      <section>
        <div className="container">
          <p className='headtext__cormorant' style={{background: 'black', paddingLeft: '5.4rem', fontSize: '2rem'}}>We would be glad to reserve a table for you at our restaurant!</p>
          <form action="submit" name="myForm" onSubmit={formSubmitHandler} style={{marginBottom: '3rem'}}>
            <div className="Box rounded border ">
              <h2 className="ms-4 mt-3" style={{color: 'white'}}>Table Reservation</h2>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="name"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Enter Your Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  id="name"
                  placeholder="Enter your Name"
                  name="name"
                  onChange={inputName}
                  value={name}
                />
              </div>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="mobilenumber"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Enter Your Mobile Number
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  id="number"
                  placeholder="Enter your Mobile Number"
                  name="number"
                  onChange={inputNumber}
                  value={number}
                />
              </div>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="email"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Enter Your e-Mail ID
                </label>
                <input
                  type={"email"}
                  className="form-control"
                  id="email"
                  placeholder="Enter your e-Mail"
                  name="email"
                  onChange={inputEmail}
                  value={email}
                />
              </div>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="name"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Address
                </label>
                <textarea id='address' name='address' rows="4" cols="50"/>
              </div>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="Date"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Date
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  id="date"
                  placeholder="Select the Date"
                  name="date"
                  onChange={inputDate}
                  value={date}
                />
              </div>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="time"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Time
                </label>
                <input
                  type={"time"}
                  className="form-control"
                  id="time"
                  placeholder="Choose time"
                  name="time"
                  onChange={inputTime}
                  value={time}
                />
              </div>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="no of attendee"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Number of Attendees:-
                </label>
                <select name='no of Attend.' id='no of Attend.'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='10+'>10+ (Specify in comments)</option>
                </select>
              </div>
              <div className="mb-3 mt-3 ms-4 me-4">
                <label
                  htmlFor="time"
                  className="form-label font-weight-normal"
                  style={{color: 'var(--color-golden)'}}
                >
                  Comments / Additional Requests
                </label>
                <textarea id='address' name='address' rows="4" cols="50"/>
              </div>
              <div className="d-grid gap-2 mb-3 mt-3 ms-4 me-4">
                <Button type="submit">Book a Table</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
  )
}

export default BookTable