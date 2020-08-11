import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const message = useMessage();

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.id]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            console.log(data.message);
        } catch (e) {
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);
        } catch (e) {
        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Link Cutter</h1>
                <div className="card blue darken-2">
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
                        <button
                            className="btn yellow darken-4"
                            onClick={loginHandler}
                            style={{marginRight: 10}}
                            disabled={loading}
                        >
                            Log In
                        </button>
                        <button
                            className="btn grey darken-4"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}