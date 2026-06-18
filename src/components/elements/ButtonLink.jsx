import React from "react";

export default
function ButtonLink(props) {

    const {
        a_aria=null, 
        a_href=null, 
        img_src=null, 
        img_alt=null, 
        string=null
    } =props

    return (
        <a aria-label={a_aria} href={a_href} target="_blank" rel="noopener noreferrer">
            {img_src &&
                <img src={img_src} alt={img_alt}/>
            }
            {string}
        </a>
    )
}