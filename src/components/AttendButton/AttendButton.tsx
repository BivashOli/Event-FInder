import React, { useState } from 'react';
import './attendbutton.css'

const AttendButton = () => {
     const [isAttending, setAttending] = useState(false) // initial value should be retrieved from database not just false

     return (
          <div className="AttendButton">
               {
                    (isAttending) ? (<button onClick={() => setAttending(false)} className="unattend-button">Unattend</button>
                    ) : (<button onClick={() => setAttending(true)} className="attend-button">Attend</button>
                    )
               }
          </div>
     );
}

export default AttendButton;