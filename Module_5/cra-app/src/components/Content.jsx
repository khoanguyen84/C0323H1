import React, { useEffect, useState } from "react";

// useEffect(callback, [deps])

// useEffect(callback) => callback sẽ được gọi lại mỗi khi component re-render - có cập nhật state (nếu ko sử dụng useState)
// useEffect(callback, []) => callback chỉ được thực hiện 1 lần duy nhất khi component được mounted vào DOM
// useEffect(callback, [deps]) => callback được thực hiện phụ thuộc vào các giá trị trong mảng deps

const Content = () => {
    const [postList, setPostList] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [action, setAction] = useState('next')
    useEffect(() => {
        // console.log('Component Did Mount');
        setLoading(true);
        async function getPost() {
            let response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${currentPage}`)
            let json = await response.json();
            setPostList(json.data)
            setLoading(false)
            setTotalPage(Math.ceil(Number(json.pagination._totalRows)/Number(json.pagination._limit)))
        }
        getPost();
        // cleanup function - Component Will Unmount - ko bắt buộc
        return () => {
            console.log('Component Will Unmount');
        }
    }, [currentPage])

    const handleNextPage = () => {
        if(currentPage < totalPage){
            setCurrentPage(currentPage + 1)
            setAction('next')
        }
    }

    const handlePreviousPage = () => {
        if(currentPage > 1)
        {
            setCurrentPage(currentPage - 1)
            setAction('prev')
        }
    }

    console.log(currentPage);
    return (
        <div className="">
            <h1>Post List</h1>
            <div className="row">
                <nav className="navigation">
                    <ul className="pagination">
                        <li id="previous" className={`${currentPage <= 1 ? 'page-item disabled' : 'page-item'} ${action == 'prev' ? 'active' : ''}`}>
                            <a role="button" className="page-link"
                                onClick={handlePreviousPage}
                            >Previous</a>
                        </li>
                        <li id="next" className={`${currentPage >= totalPage ? 'page-item disabled' : 'page-item'} ${action == 'next' ? 'active' : ''}`}>
                            <a role="button" className="page-link"
                                onClick={handleNextPage}
                            >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {
                loading ? <p className="text-danger">Loading...</p> : (
                    <div className="row" >
                        {
                            postList.map((post) => (
                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <img src={post.imageUrl} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="cart-text">{post.description}</p>
                                            <p className="fst-italic">Author: {post.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Content;