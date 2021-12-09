import { useState } from "react"


function Post({currentUser, setUser, setAllPost}){
    const [postData, setPostData] = useState({
        content: currentUser.content
    });

    function handleChange(e) {
        console.log(e.target.value)
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
            setAllPost(current => [...current])
            setPostData({
                content: ""
            })
            console.log("hello") 
            setUser(data)
        })
    }
    // post is working but once the post has been submitted you cannot type on that page unless the page has been refreshed so therefore state is not being updated??



    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input onChange={handleChange} type='text' name='content' value={postData.content} placeholder='What on your mind?'/>
            </label>
            <button>Share Post</button>
        </form>

    )
}

export default Post;
