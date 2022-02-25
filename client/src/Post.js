import { useState } from "react"
import {useHistory} from "react-router-dom"

function Post({currentUser, setUser, setAllPost}){
    const [postData, setPostData] = useState({
        content: currentUser.content,
        user_id: currentUser.id,
        like: 0
    });

    let history = useHistory()
    const handleSubmitSharePost = (e) => {
        history.push(`/home`)
    };
    

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
            handleSubmitSharePost()
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <textarea id='postfield' onChange={handleChange} type ='text' name='content' value={postData.content} placeholder='What on your mind?'/>
            </label>
            <div>
                <button className="allbuttons">Share Post</button>
            </div>
        </form>
    )
}

export default Post;
