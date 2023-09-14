import React, { useState } from "react";

function TodoApp() {
    const [jobList, setJobList] = useState([
        "Quét nhà", "Lau nhà", "Giặt áo quần"
    ])

    const [jobname, setJobname] = useState('')

    const handleAddJob = (e) => {
        e.preventDefault();
        setJobList([
            ...jobList,
            jobname
        ])
        setJobname('')
    }

    const handleRemoveJob = (jobRemove) => {
        let confirm = window.confirm(`Are you sure to remove job : ${jobRemove}?`)
        if(!confirm) return;
        // let newJobList = [];
        // for (let i = 0; i < jobList.length; i++) {
        //     if (jobList[i] != jobRemove) {
        //         newJobList.push(jobList[i])
        //     }
        // }

        // let newJobList = jobList.filter((item) => item != jobRemove)
        // setJobList(newJobList)

        setJobList((prev) => {
            let newJobList = prev.filter((item) => item != jobRemove)
            return newJobList;
        })

        // if(confirm) {
        //     setJobList((prev) => {
        //         let newJobList = prev.filter((item) => item != jobRemove)
        //         return newJobList;
        //     })
        // }
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="row col-md-6 ">
                <h3 className="text-danger">Todo App</h3>
                <form onSubmit={handleAddJob}>
                    <div className="form-group d-flex align-items-center">
                        <input type="text" className="form-control me-1"
                            onInput={(e) => setJobname(e.target.value)}
                            value={jobname}
                        />
                        <button type="submit" className="btn btn-sm btn-secondary">
                            <i className="fa fa-plus me-2" />
                            Add
                        </button>
                    </div>
                </form>
                <ul className="list-group mt-3">
                    {
                        jobList.map((job, index) => (
                            <li key={index} className="list-group-item list-group-item-warning d-flex justify-content-between">
                                {job}
                                <span role="button" className="fw-bolder text-danger"
                                    onClick={() => handleRemoveJob(job)}
                                >&times;</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoApp;