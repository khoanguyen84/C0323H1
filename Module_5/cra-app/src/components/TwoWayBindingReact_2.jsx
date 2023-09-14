import React, { useState } from "react";

function TwoWayBindingReact_2() {
    const [state, setState] = useState({
        email: '',
        password: '',
        mobile: ''
    })
    const handleLogin = () => {
        // call login API
        alert(JSON.stringify(state))
    }

    const handleChangeUser = () => {
        setState({
            ...state,
            "email": 'khoa.nguyen@codegym.vn',
            "password": '123456'
        })
    }

    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        // call API
        alert(JSON.stringify(state))
    }

    const { email, password, mobile } = state;

    return (
        <form onSubmit={handleSubmitLogin} className="row col-sm-4">
            <h3 className="text-success">Login Form</h3>
            <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control"
                    onInput={handleInputValue}
                    value={email}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control"
                    onInput={handleInputValue}
                    value={password}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Mobile</label>
                <input type="tel" name="mobile" className="form-control"
                    onInput={handleInputValue}
                    value={mobile}
                />
            </div>
            <div className="form-group mb-3">
                {/* <button type="submit" className="btn btn-danger btn-sm me-2"
                    onClick={handleLogin}
                >Login</button> */}
                <button type="submit" className="btn btn-danger btn-sm me-2">Login</button>

                <button type="button" className="btn btn-dark btn-sm"
                    onClick={handleChangeUser}
                >Change User</button>
            </div>
        </form>
    )
}

export default TwoWayBindingReact_2;