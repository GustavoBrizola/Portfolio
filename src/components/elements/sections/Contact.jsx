import React from "react";

import githubLogo from '/images/icons/Github_white.png'
import linkedinLogo from '/images/icons/Linkedin_white.png'
import whatsappLogo from '/images/icons/WhatsApp_white.png'
import mailLogo from '/images/icons/Mail_white.png'

import profile from 'json/personal/Profile.json'

import ButtonLink from "components/elements/ButtonLink";

export default
function Contact() {
    return (
        <div>
            <h1>Contact me</h1>
            <div>
                <iframe id="googleMaps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220895.41032212423!2d-51.34229297067879!3d-30.10876675973471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1781618958196!5m2!1spt-BR!2sbr" 
                    width="100%" height="500px" 
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', margin: '20px 0' }}
                /> 
                <ButtonLink a_aria={'Google Maps'} a_href={"https://www.google.com/maps/search/?api=1&query=Porto+Alegre+RS"} string={'Google Maps'} />
            </div>
            <div>
                <h3>Contacts</h3>
                <ButtonLink a_aria='Start chatting' a_href={`https://wa.me/${profile.GustavoBrizola.contacts.whatsapp}`} img_src={whatsappLogo} img_alt='WhatsApp' string='WhatsApp'/>
                <ButtonLink a_aria='Send an Email' a_href={`mailto:${profile.GustavoBrizola.contacts.mail}`} img_src={mailLogo} img_alt='Email' string='Email'/>
                <ButtonLink a_aria='Open Github profile' a_href={profile.GustavoBrizola.contacts.github} img_src={githubLogo} img_alt='Github' string='Github'/>
                <ButtonLink a_aria='Open LinkedIn profile' a_href={profile.GustavoBrizola.contacts.linkedin} img_src={linkedinLogo} img_alt='Linkedin' string='LinkedIn'/>
            </div>
        </div>
    )
}