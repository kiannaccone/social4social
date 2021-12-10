import { useHistory } from "react-router-dom";
import Login from "./Login"
import SignUp from "./SignUp"

function LandingPage({onLogin}){
 
    return(

        <div>
            <h1 id="header_div">
                Social4SocialPeople</h1>
            <h4>Howdy!</h4>
            <Login onLogin = {onLogin}/>
            <SignUp onLogin = {onLogin}/>
        </div>
    )
}

export default LandingPage;