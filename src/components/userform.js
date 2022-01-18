import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmpassword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newU = {firstname, lastname, email, password, confirmpassword};
        setHasBeenSubmitted(true);
    };

    const firstnameHandle = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("First Name Required")
            } else if(e.target.value.length < 2){
                setFirstnameError("First Name must be at least 2 characters!")
            }
    }

    const lastnameHandle = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Last Name Required")
        } else if(e.target.value.length < 2){
            setLastnameError("Last Name must be at least 2 characters!")
        }
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email Required")
        } else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters!")
        }
    }
    
    const passwordHandle = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password Required")
        } else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters!")
        }
    }

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting!"
    //     } else {
    //         return "Welcome, submit the form!"
    //     }
    // };

    return(
            <div>
                <form onSubmit={createUser}>
                    <div>
                        <label htmlFor='firstname'>First Name : </label>
                        <input name="firstname" type="text" onChange={firstnameHandle} value={firstname} />
                        {
                            firstnameError ?
                            <p style={{color: 'red'}}>{ firstnameError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Last Name : </label>
                        <input type="text" onChange={lastnameHandle} value={lastname} />
                        {
                            lastnameError ?
                            <p style={{color: 'red'}}>{ lastnameError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Email : </label>
                        <input type="email" onChange={ emailHandle } value={email}/>
                        {
                            emailError ?
                            <p style={{color: 'red'}}>{ emailError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Password : </label>
                        <input type="password" onChange={ passwordHandle } value={password}/>
                        {
                            passwordError ?
                            <p style={{color: 'red'}}>{ passwordError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Confirm Password : </label>
                        <input type="password" onChange={ (e) => {setConfirmpassword(e.target.value) }} value={confirmpassword} />
                    </div>
                    <input type="submit" value="Submit User"/>
                </form>
                
                <div>
                    {/* <h3>{ formMessage() }</h3> */}
                    {
                        hasBeenSubmitted ?
                        <h3>Thank you for submitting form!</h3> :
                        <h3>Submit a form!</h3>
                    }
                    <p>{firstname}</p>
                    <p>{lastname}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                    <p>{confirmpassword}</p>
                </div>
        </div>
    );
};

export default UserForm;