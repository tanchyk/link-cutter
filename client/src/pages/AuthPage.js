import React, {useState} from "react";

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const  changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Link Cutter</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div className="input-field">
                            <input
                                placeholder="Enter Email"
                                id="email"
                                type="text"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Enter Password"
                                id="password"
                                type="text"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{marginRight: 10}}>Log In</button>
                        <button className="btn grey darken-4">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}