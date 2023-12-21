import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import React from "react";

const Login = () => {

     const [user, setUser] = useState({})


     /*  response comes from google script*/
     const handleCallbackResponse = (response) => {
          console.log("JWT : " + response.credential)
          let userObject = jwt_decode(response.credential)
          setUser(userObject)
          document.getElementById("signInDiv").hidden = true
          console.log(userObject)

          fetch('http://127.0.0.1:5000/login', {
               method: 'POST',
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(response.credential)
          }).then((res) => {
               res.json().then(
                    json => {

                         if (json["success_flag"]) {
                              console.log("sad" + navigator.cookieEnabled)
                              document.cookie = "JWT=" + response.credential + ", path=/"
                              console.log(document.cookie)
                         }

                    }
               )
               console.log("Success")
          })
     }

     const handleSignOut = (e) => {
          setUser({})
          document.getElementById("signInDiv").hidden = false

     }

     useEffect(() => {
          /* global google */
          google.accounts.id.initialize({
               client_id: "948743406742-ajenkg2jp85kcvaunmul4poiapond0k1.apps.googleusercontent.com",
               callback: handleCallbackResponse
               // ,"client_secret":"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"
          })

          google.accounts.id.renderButton(
               document.getElementById("signInDiv"),
               { theme: "outline", size: "large" }
          )

          google.accounts.id.prompt()
     }, [])


     return (
          <div className="login">
               <div id="signInDiv"></div>
               {
                    Object.keys(user).length != 0 &&
                    <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
               }
               {user &&
                    <div>
                         <img src={user.picture} />
                         <h3>{user.name}</h3>
                    </div>
               }
          </div>
     );

}

export default Login;