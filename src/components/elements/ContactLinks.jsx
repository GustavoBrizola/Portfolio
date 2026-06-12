import React from "react";

import whatsAppLogo from '/images/icons/WhatsApp_white.png'
// import gmailLogo from '/images/ico/LogoGmail.png'


export default
function ContactLinks()
{

    return (
        <>  
            <h4>Contacts<hr/></h4>
            <a href={`https://wa.me/5551985283336`} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={whatsAppLogo}/>
                <p>WhatsApp</p>
            </a>

            {/* <a href={`mailto:gustavo.brizola@icloud.com`} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={gmailLogo}/>
                <p>Mail</p>
            </a>            */}
        </>
    )
}