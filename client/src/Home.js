import PostContainer from './PostContainer'

function Home({allPost, user}){

    return(
        <div>
            <h2>Feed</h2>
            <PostContainer allPost={allPost} user={user}/>
        </div>
    )
}

export default Home;