import FollowCard from "./FollowCard";

function FollowContainer(allFollows){

    let follows = allFollows.map((follow) => <FollowCard key={follow.id} follow={follow}/> )
    return(
        <div>
            {follows}
        </div>
    )
}

export default FollowContainer;