import Cookies from 'js-cookie'

const UserEvents = () => {
     const JWT = Cookies.get("JWT")
     console.log(JWT)
     const data = {JWT}
     fetch('http://127.0.0.1:5000/event', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
     }).then(
          (res) => {
               res.json().then(
                    json => {
                         console.log("Events : " + json)

                    }
               )
               // console.log("Success")
          }
     )
     return (
          <div>asd</div>
     );
}

export default UserEvents;