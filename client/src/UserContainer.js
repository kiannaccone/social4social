import UserCard from "./UserCard";

function UserContainer({allUsers, followUser}){

    const userCards = allUsers.map((user) => <UserCard key={user.id} followUser={followUser} user={user} />);

    return(
        <div>
            {userCards}
        </div>
    )
}

export default UserContainer;