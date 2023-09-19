import React, { useState, useEffect } from "react";
import StudentService from "../../services/studentService";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const StudentList = () => {
    const [studentList, setStudentList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true);
            async function getData() {
                let studetnRes = await StudentService.getStudents();
                setStudentList(studetnRes.data);
                setLoading(false)
            }

            getData()
        } catch (error) {

        }
    }, [])


    return (
        <div className="container">
            <section>
                <div className="d-flex align-items-center">
                    <h3 className="text-warning me-3">Student List</h3>
                    <button className="btn btn-sm btn-outline-success">
                        <i className="fa fa-plus me-2" />
                        Add Student
                    </button>
                </div>
                <p className="fst-italic">Deserunt ut pariatur tempor aute incididunt Lorem esse. Pariatur dolore aute esse eu pariatur voluptate in amet excepteur occaecat culpa eiusmod. Non qui labore anim do dolore magna deserunt amet commodo Lorem aliquip.</p>
            </section>
            <section className="mt-2">
                {
                    loading ? <Spinner /> : (
                        <div>
                            <table className="table table-striped table-hover">
                                <thead className="table-warning">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>City</th>
                                        <th>Mark</th>
                                        <th>Actionts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentList.length && studentList.map((std) => (
                                            <tr>
                                                <td>{std.id}</td>
                                                <td>{std.name}</td>
                                                <td>{std.age}</td>
                                                <td>{std.gender}</td>
                                                <td>{std.city}</td>
                                                <td>{std.mark}</td>
                                                <td>
                                                    <Link to={`/student/detail/${std.id}`}>Detail</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default StudentList;