import BioEdit from './BioEdit'
import ProfileCard from './ProfileCard';
import PostContainer from './PostContainer'

function Profile({user, allPost}){



    return(
        <div>
            
            <ProfileCard user= {user}/>
            <PostContainer allPost={allPost}/>
            <BioEdit/>
        </div>
    )
}

export default Profile;