import React from "react";

function TwoWayBindingJS() {

    const handleLogin = () => {
        let loginInfo = {
            "email": document.querySelector('#email').value,
            "password": document.querySelector('#password').value
        }
        // call login API
        alert(JSON.stringify(loginInfo))
    }

    const handleChangeUser = () => {
        // call API getUser => object
        document.querySelector('#email').value = 'khoa.nguyen@codegym.vn';
        document.querySelector('#password').value = '123456';
    }
    return (
        <div className="row col-sm-4">
            <h3 className="text-success">Login Form</h3>
            <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Password</label>
                <input type="password" id="password" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <button className="btn btn-danger btn-sm me-2"
                    onClick={handleLogin}
                >Login</button>

                <button className="btn btn-dark btn-sm"
                    onClick={handleChangeUser}
                >Change User</button>
            </div>
        </div>
    )
}

export default TwoWayBindingJS;