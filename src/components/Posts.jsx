
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Posts = () => {
    const [posts , setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [limit , setLimit] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`).then((res)=>{
            setPosts(res.data)
        })
    }, [page, limit])
    const nextPage= ()=>{
        setPage(prev=>prev+1)
    }
    const prevPage=()=>{
        setPage(prev =>prev-1)
    }
    const nextPageL = ()=>{
        setLimit(prev=>prev+1)
    }
    
    const prevPageL = ()=>{
        setLimit(prev=>prev-1)
    }
  return (
    <div className="container">
        <div className="row">
            <table className="table-bordered tbale-hover">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post=>(
                            <tr key={post.id}>
                                <th>{post.userId}</th>
                                <th>{post.title}</th>
                                <th>{post.body}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="mt-3">
                <button onClick={prevPage}>Per</button>
                <span>{page}</span>
                <button onClick={nextPage}>Next</button>
            </div>
            <div className="mt-3">
                <button  onClick={prevPageL}  disabled={limit==1}>Previous_limit</button>
                <span>Limit:{limit}</span>
                <button  onClick={nextPageL}>Next</button>
            </div>
        </div>
    </div>
  )
}
