import {GoogleLogin} from "react-google-login"

const clientId = "720725769227-mk5l4rkn2u05ma0ja44n2qt146br88qi.apps.googleusercontent.com"
const Login = () => {
     const onSuccess = (res) => {
          console.log("Success")
     }

     const onFailure = (res) => {
          console.log("Failure")
     }
     
     return ( 
          <div id="signInButton">
               <GoogleLogin
               clientId = {clientId}
               buttonText = "Login"  
               onSuccess = {onSuccess}
               onFailure = {onFailure}
               cookiePolicy = {'single_host_origin'}
               isSignedIn = {true}
               />
          </div>
      );
}
 
export default Login;