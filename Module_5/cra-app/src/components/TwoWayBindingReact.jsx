import React, {useState} from "react";

function TwoWayBindingReact() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        const loginInfo = {
            "email" : email,
            "password" : password
        }
        // call login API
        alert(JSON.stringify(loginInfo))
    }

    const handleChangeUser = () => {
        setEmail('khoa.nguyen@codegym.vn');
        setPassword('123456')
    }

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="row col-sm-4">
            <h3 className="text-success">Login Form</h3>
            <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"
                    onInput={handleInputEmail}
                    value={email}
                 />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" 
                    onInput={(e) => setPassword(e.target.value)}
                    value={password}
                />
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

export default TwoWayBindingReact;