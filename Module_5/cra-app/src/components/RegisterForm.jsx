import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const registerSchema = yup.object({
    usename: yup.string()
        .required("Bạn phải nhập usename!")
        .min(5, "Tên đăng nhập phải từ 5 ký tự!")
        .max(30),
    email: yup.string()
        .required()
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email không hợp lệ"),
    password: yup.string()
        .required()
        .min(8),
    confirmPassword: yup.string()
                    .required()
                    .min(8)
                    .oneOf([yup.ref("password")], "Confirm password does not match!"),
    age: yup.number()
        .required()
        .positive()
        .max(40)
        .typeError("Invalid Age")
})

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const handleRegister = (values) => {
        console.log(values);
    }

    return (
        <div className="container d-flex justify-content-center mt-2">
            <div className="row col-md-6 rounded">
                <h3 className="fw-bolder text-center mt-5">Register Form</h3>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-group mb-3">
                        <label className="label-form">Username</label>
                        <input type="text" className="form-control" {...register("usename")} />
                        <span className="text-danger">{errors?.usename?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-form">Email</label>
                        <input type="text" className="form-control" {...register('email')} />
                        <span className="text-danger">{errors?.email?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-form">Age</label>
                        <input type="text" className="form-control" {...register('age')} />
                        <span className="text-danger">{errors?.age?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-form">Password</label>
                        <input type="password" className="form-control" {...register('password')} />
                        <span className="text-danger">{errors?.password?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-form">Confirm Password</label>
                        <input type="password" className="form-control" {...register('confirmPassword')} />
                        <span className="text-danger">{errors?.confirmPassword?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-sm btn-danger me-3">Register</button>
                        <button type="button" className="btn btn-sm btn-dark"
                            onClick={() => reset()}
                        >Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegisterForm