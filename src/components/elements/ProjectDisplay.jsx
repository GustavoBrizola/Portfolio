import React from "react"

export
function ProjectDisplay(props) {
    
    const {
        title='null', 
        img_src=null, 
        img_alt=null, 
        link=null, 
        description='null'
    } = props
    
    return (
        <article>
            <div style={{height:'fit-content',}}>
                <img src={img_src} alt={img_alt}/>  
                <h4>{title?.substring(0, 50)}</h4>
            </div>
            <p>{description?.substring(0, 200)}</p>
            <div style={{justifyContent:'center', alignContent:'end'}}>
                {link && Object.entries(link).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                        {platform === 'github' ? 'Github' : 'Site'}
                    </a>
                ))}
            </div>
        </article>
    )
}   