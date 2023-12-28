import React, { useEffect, useState } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode"

const Login = () => {


     const HandleLoginSuccess = (credentialResponse: CredentialResponse) => {


          console.log(credentialResponse.credential)



          fetch('http://127.0.0.1:3001/login', {
               method: 'POST',
               headers: { 'Authorization': `Bearer ${credentialResponse.credential}`, 'Content-Type': "application/json" },
               body: JSON.stringify(credentialResponse)
          }).then((res: Response) => res.json()).then((data) => {
          }).catch(error => console.log("log:" + error))
     }


     return (
          <GoogleLogin
               onSuccess={HandleLoginSuccess}
               onError={() => {
               }}
          />
     );
}

export default Login;