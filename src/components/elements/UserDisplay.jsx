import React from "react";

import pPhoto from '/images/photos/avatar_placeholder.png'


export default
function UserDisplay()
{ 
    return (
        <div className="navigationBar_user">
            <img src={pPhoto}/>
            <span>
                Gustavo Brizola
            </span>
        </div>
    )
    
}