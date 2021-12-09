import PostContainer from './PostContainer'

function Home({allPost}){

    return(
        <div>
            <PostContainer allPost={allPost}/>
        </div>
    )
}

export default Home;