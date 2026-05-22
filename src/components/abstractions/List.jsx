import React from "react";

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default
function List(props)
{
    const Component = props.Type || 'a';
    const InnerComponent = props.ContentType || 'span';

    return (
        <Component 
            className={props.ClassName || null}
        >
            {/* Check if Info is an array, then map through it */}
            {Array.isArray(props.Info) 
                ? props.Info.map((item, index) => <InnerComponent key={index}>{item}</InnerComponent>) 
                : (props.Info && <InnerComponent>{props.Info}</InnerComponent>)
            }
        </Component>
    );
}