import { useState } from "react"
import Login from "./Login";

function Post({currentUser, setUser, setAllPost}){
    const [postData, setPostData] = useState({
        content: currentUser.content,
        user_id: currentUser.id,
        like: 0
    });
    console.log(currentUser)

    function handleChange(e) {
        setPostData((currentPostData) => ({
            ...currentPostData,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/posts`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(postData)
        })
        .then(resp => resp.json())
        .then(data => {
            setAllPost((current) => [data,...current])
            setPostData({
                content: "",
            })
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input onChange={handleChange} type='text' name='content' value={postData.content} placeholder='What on your mind?'/>
            </label>
            <button className="allbuttons">Share Post</button>
        </form>
    )
}

export default Post;



// we want too:

// set a turnary expression that checks a new user Login
// When a new user logs in and has no followers, there is a page that 
// rendered that says "You have no followers yet."  

// Once the user then follows someone - 
// they show up on th Home feed 

