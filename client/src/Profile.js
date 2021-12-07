import BioEdit from './BioEdit'
import ProfileCard from './ProfileCard';

function Profile({allUsers}){

const userCards = allUsers.map((user) => <ProfileCard key={user.id} user={user} />);

    return(
        <div>
            {userCards}
            <BioEdit/>
        </div>
    )
}

export default Profile;