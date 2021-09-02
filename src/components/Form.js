import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <div className="container mt-5 bg-light" >
            <form>
                <div className="form-group mt-2">
                    <label htmlFor="">First Name: </label>
                    <input onChange={(e)=>setFirstName(e.target.value)} type="text" name="firstName" id="" placeholder="Search" aria-label="Search"/>

                    {
                        firstName.length < 2?
                        <p className="text-danger">First Name must be at least 2 characters</p>:
                        ""
                    }
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input onChange={(e)=>setLastName(e.target.value)} type="text" name="lastName" id="" placeholder="Search" aria-label="Search" />
                    {
                        lastName.length < 2?
                        <p className="text-danger"> Last Name must be at least 2 characters</p>:
                        ""
                    }
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" placeholder="Search" aria-label="Search"/>
                    {
                        email.length < 2?
                        <p className="text-danger">Email must be at least 2 characters</p>:
                        ""
                    }
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" placeholder="Search" aria-label="Search"/>
                    {
                        password.length < 2?
                        <p className="text-danger">Password must be at least 8 characters</p>:
                        ""
                    }
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="" placeholder="Search" aria-label="Search" />
                    {confirmPassword!=password?<p className="text-danger">Password must match</p>:""}
                </div>
            </form>

        </div>
        </div>
    );
};



export default Form;