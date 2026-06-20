import React from "react";

export default
function ButtonLink(props) {

    const {
        a_aria=null, 
        a_href=null, 
        img_posLeft=null,
        img_posRight=null,
        img_src=null, 
        img_alt=null, 
        string=null
    } =props

    return (
        <a aria-label={a_aria} href={a_href} target="_blank" rel="noopener noreferrer">
            {img_src && img_posLeft &&
                <img src={img_src} alt={img_alt} style={{width: '18px', margin: '0 10px 0 0px'}}/>
            }

            {string}
            
            {img_src && img_posRight &&
                <img src={img_src} alt={img_alt} style={{width: '18px', margin: '0 0px 0 10px'}}/>
            }
        </a>
    )
}