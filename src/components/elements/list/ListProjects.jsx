import React from "react";

import Button from "components/abstractions/Button";

export default
function ListProjects()
{
    return(
        //@ts-ignore
        <Button ClassName="ListProjects">
            <div>
                <img 
                    className="ListProjects_image"
                    src=""
                    alt=""
                />
            </div>
            <div className="ListProject_title">
            </div>
        </Button>
    )
}