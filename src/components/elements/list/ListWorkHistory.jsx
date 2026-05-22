import React from 'react'

import ProjectInfo from 'json/ProjectInfo.json'

export default
function ListWorkHistory()
{
    const projects = Object.keys(ProjectInfo.Projects);

    return (
        <div>
            {projects.map((projectKey) => 
            (
                <div key={projectKey}>
                    {ProjectInfo.Projects[projectKey] }
                </div>
            ))}
        </div>
    )
}