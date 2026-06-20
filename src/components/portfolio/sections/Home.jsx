import React from "react";

import ButtonLink from "components/elements/ButtonLink";

export default
function Home() {
    return (
        <div>
            <h1><b>Hello!</b> I'm Gustavo Brizola</h1>
            <p>This is my website I share all my work I create. Select one of the tabs to explore my work.</p>
            <div>
                <h2>Your support helps a lot</h2>
                <div style={{display: 'flex', gap:'30px', flexWrap:'wrap'}}>
                    <div style={{flex:'1'}}>   
                        <p>Have a good feature idea or wanna suggest some? Check the idea section. </p>
                        <div style={{display:'flex'}}>
                            <ButtonLink a_aria='Suggest' a_href={'https://github.com/GustavoBrizola/Portfolio/discussions/categories/ideas'} string={'Suggest Features'}/>
                            <ButtonLink a_aria='Feedback' a_href={'https://github.com/GustavoBrizola/Portfolio/discussions/categories/ideas'} string={'Give Feedback'}/>
                        </div>
                    </div>
                    <div style={{flex:'1'}}>   
                        <p>Found a bug somewhere? Consider report to the issue section your discover.</p>
                        <div><ButtonLink a_aria='ReportBug' a_href={'https://github.com/GustavoBrizola/Portfolio/issues'} string={'Report Bug'}/></div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}