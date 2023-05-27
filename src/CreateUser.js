import { useState } from "react";
import  { Redirect } from 'react-router-dom'


const CreateUser = () => {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")

     const handleSubmit = () => {
          const data = {username, password}
          fetch('http://127.0.0.1:5000/user', {
               method : 'POST',
               headers : {"Content-Type" : "application/json"},
               body: JSON.stringify(data)
          }).then(() => {
               console.log(username)
               console.log(password)
          })
        
     }
     return ( 
          <div className="CreateUser">
               <input onChange={e => setUsername(e.target.value)}/>
               <input onChange={e => setPassword(e.target.value)}/>

               <button onClick={handleSubmit}>Submit</button>
          </div>
      );
}
 
export default CreateUser;