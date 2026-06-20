import React from "react";

import avatar from '/images/photos/avatar_placeholder.png'
import ContactList from "components/portfolio/features/ContactList";

export default
function About()
{
    return (
        <div>
            <div>
                <img src={avatar} style={{width:'100px'}}/>
                <h2 style={{marginBottom:'0'}}>Gustavo Silva Brizola</h2>
                <h4 style={{marginTop:'0'}}>Software Developer</h4>
            </div>
            <div>
                <h3>Contact</h3>
                <ContactList/>
            </div>
        </div>
    )
}