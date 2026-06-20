import React from "react";

import ButtonLink from "components/elements/ButtonLink";
import profile from 'json/personal/Profile.json'

import githubLogo from '/images/icons/Github_white.png'
import linkedinLogo from '/images/icons/Linkedin_white.png'
import whatsappLogo from '/images/icons/WhatsApp_white.png'
import mailLogo from '/images/icons/Mail_white.png'

export default
function ContactList(props) {

    const {
        whatsApp,
        email,
        github,
        linkedIn
    } = props

    return (
        <>
            <ButtonLink a_aria='Start chatting' a_href={`https://wa.me/${profile.GustavoBrizola.contacts.whatsapp}`} img_src={whatsappLogo} img_posLeft={true} img_alt='WhatsApp' string='WhatsApp'/>
            <ButtonLink a_aria='Send an Email' a_href={`mailto:${profile.GustavoBrizola.contacts.mail}`} img_src={mailLogo} img_posLeft={true} img_alt='Email' string='Email'/>
            <ButtonLink a_aria='Open Github profile' a_href={profile.GustavoBrizola.contacts.github} img_src={githubLogo} img_posLeft={true} img_alt='Github' string='Github'/>
            <ButtonLink a_aria='Open LinkedIn profile' a_href={profile.GustavoBrizola.contacts.linkedin} img_src={linkedinLogo} img_posLeft={true} img_alt='Linkedin' string='LinkedIn'/>
        </>
    )
}