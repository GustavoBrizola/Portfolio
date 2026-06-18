import React from "react";

import avatar from '/images/photos/avatar_placeholder.png'
import githubLogo from '/images/icons/Github_white.png'
import linkedinLogo from '/images/icons/Linkedin_white.png'
import whatsappLogo from '/images/icons/WhatsApp_white.png'
import mailLogo from '/images/icons/Mail_white.png'

import profile from 'json/personal/Profile.json'

import ButtonLink from "components/elements/ButtonLink";

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
                <ButtonLink a_aria='Start chatting' a_href={`https://wa.me/${profile.GustavoBrizola.contacts.whatsapp}`} img_src={whatsappLogo} img_alt='WhatsApp' string='WhatsApp'/>
                <ButtonLink a_aria='Send an Email' a_href={`mailto:${profile.GustavoBrizola.contacts.mail}`} img_src={mailLogo} img_alt='Email' string='Email'/>
                <ButtonLink a_aria='Open Github profile' a_href={profile.GustavoBrizola.contacts.github} img_src={githubLogo} img_alt='Github' string='Github'/>
                <ButtonLink a_aria='Open LinkedIn profile' a_href={profile.GustavoBrizola.contacts.linkedin} img_src={linkedinLogo} img_alt='Linkedin' string='LinkedIn'/>
            </div>
        </div>
    )
}