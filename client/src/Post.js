
function Post(){
    

    return(
        <div>
            <form>
                <label>
                    What's on your mind?
                    <textarea onChange='' type='text' name='post' value=''>
                    </textarea>
                </label>
            </form>
            <button>Share Post</button>
        </div>
    )
}

export default Post;



// We still need to:

// - create the "handleChange" function as well as the "handleSubmit"
// - we are going to need to use state to update the post and have it push back to the server 
