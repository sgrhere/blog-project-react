import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";


function Home() {
    const [blogs,setBlogs] =useState([])
    const fetchBlogs = async()=>{
        const response = await axios.get("http://localhost:3000/blog")
        setBlogs(response.data.data)  // store data from db 
    }

    useEffect(()=>{
     fetchBlogs()   
    },[])
     
    return (
        <>
        <Navbar/>
        <div className="flex flex-wrap justify-evenly">
            {
                blogs.map(function(blog){
                    return(
                        <Card blog={blog}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default Home;