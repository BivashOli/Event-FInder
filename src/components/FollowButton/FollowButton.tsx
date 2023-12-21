import React, { useEffect } from "react";
import { useState } from "react";
import "./followbutton.css"

const FollowButton = () => {
     const [isFollowing, setFollowing] = useState(false) // initial value should be retrieved from database not just false

     // do calls to the backend when button is pressed
     useEffect(() => { }, [isFollowing])

     return (
          <div className="follow-container">
               {(isFollowing) ? (<button onClick={() => setFollowing(false)} className="unfollow-button">Unfollow</button>
               ) : (<button onClick={() => setFollowing(true)} className="follow-button">Follow</button>
               )}
          </div>
     );
}

export default FollowButton;