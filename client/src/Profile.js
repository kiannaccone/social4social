import ProfileCard from './ProfileCard';
import PostContainer from './PostContainer'

function Profile({user, allPost, setAllUsers, allUsers, setUser}){

    return(
        <div>
            <ProfileCard user={user} setAllUsers={setAllUsers} allUsers={allUsers} setUser={setUser}/>
            <PostContainer allPost={allPost}/>
        </div>
    )
}

export default Profile;