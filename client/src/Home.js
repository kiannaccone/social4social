import PostContainer from './PostContainer'

function Home({user, allPost}){

    return(
        <div>
            <PostContainer allPost={allPost}/>
        </div>
    )
}

export default Home;