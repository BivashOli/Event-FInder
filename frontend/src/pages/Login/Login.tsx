import React, { useEffect, useState } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode"

const Login = () => {

     const [token , setToken] = useState<CredentialResponse>()

     const HandleLoginSuccess = (credentialResponse : CredentialResponse) => {
          console.log("stuff is happening!")
          fetch('http://127.0.0.1:3001/login', {
               method: 'POST',
               headers: { 'Content-Type': "application/json" },
               body: JSON.stringify(credentialResponse)
          }).then((res: Response) => res.json()).then((data) => {
               console.log("success")
               console.log(data)
          }).catch(error => console.log("log:" + error))
     }
    

     return (
          <GoogleLogin
               onSuccess={HandleLoginSuccess}
               onError={() => {
                    console.log("Login failed")
               }}
          />
     );
}

export default Login;