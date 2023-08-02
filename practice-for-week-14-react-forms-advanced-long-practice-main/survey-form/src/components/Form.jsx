import React from "react"
import {useState, useEffect} from 'react'


export const Form = props => {

    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [number, setNumber]= useState('')
    const [phoneType, setPhoneType] = useState('')
    const [bio, setBio] = useState('')
    const [staff, setStaff] = useState('')
    const [notify, setNotify] = useState(false)
    const [validationErrors, setValidationErrors] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(()=>{
        
        const errors = {name:[], email:[], number:[], phoneType:[], bio:[], staff:[], notify:[]};
        if (!name.length) errors['name'].push('Please enter your Name');
        if (name.length > 30) errors['name'].push('Name must be less than 30 characters');
        if (email.length && !email.includes('@')) errors['email'].push('Please provide a valid Email');
        if (!email.length) errors['email'].push('Please provide an Email.')
        setValidationErrors(errors);
    }, [name, email])

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setHasSubmitted(true);
        // console.log(e.target.value)
        const inputs = {
            name,
            email,
            number,
            phoneType,
            bio,
            staff,
            notify
        }
        
        if(Object.values(validationErrors).length > 0) {
            console.log(validationErrors)
        } else {
            console.log(inputs)
            setName('');
            setEmail('');
            setNumber('');
            setPhoneType('');
            setBio('');
            setNotify(false);
            setValidationErrors({});
            setHasSubmitted(false);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id ='name'type="text" value={name} onChange={e => setName(e.target.value)}/>

                <label htmlFor="email">Email: </label>
                <input id='email' type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="phoneNumber">Phone Number: </label>
                <input id='phoneNumber' type="number" value={number} onChange={e => setNumber(e.target.value)}/>

                <label htmlFor="phoneType">Phone Type: </label>
                <select defaultValue="none" name="phoneType" id="phoneType" onChange={e => setPhoneType(e.target.value)} >
                    <option value="none" disabled hidden>Select a phone type</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="cell">Cell</option>
                </select>

                <label htmlFor="">Instructor</label>
                <input id="instructor" name="staff" type="radio" value={staff} onChange={e => setStaff('instructor')}/>
                    
                <label htmlFor="student">Student</label>
                <input id='student' name="staff" type="radio" value={staff} onChange={e => setStaff('student')}/>

                <label htmlFor="bio">Bio</label>
                <textarea id="bio" cols="30" rows="10" placeholder="enter a bio" value={bio} onChange={e => setBio(e.target.value)}></textarea>

                <label htmlFor="emailNotif">Notifications</label>
                <input id='emailNotif' type="checkbox" value={notify} onChange={e => {
                    e.target.checked ? setNotify(true) : setNotify(false)
                    }
                }/>

                <input type="submit" value="Submit"/>
            </form>
            <ul>
                {
                    <li>{Object.values(validationErrors)}</li>
                }
            </ul>
        </div>
    )
}

