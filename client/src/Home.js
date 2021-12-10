import PostContainer from './PostContainer'

function Home({allPost, user}){

    return(
        <div>
            <PostContainer allPost={allPost} user={user}/>
        </div>
    )
}

export default Home;