import ProfileCard from './ProfileCard';
import ProfilePostContainer from './ProfilePostContainer'

function Profile({user, allPost, setAllUsers}){

    return(
        <div>
            <ProfileCard user={user} setAllUser={setAllUsers} allUsers={allUsers}/>
            <ProfilePostContainer allPost={allPost} user={user}/>
        </div>
    )
}

export default Profile;