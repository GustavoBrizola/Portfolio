import React from "react";

/**
 * Abstracs paragraphs, allowing 
 * @param {Object} props 
 * @param {string} [props.type]         - Default to 'p'
 * @param {string} [props.className]
 * @param {any} [props.paragraph]
 */
export default
function Paragraph(props)
{
    const {
        type,
        className,
        paragraph,
    } = props;

    const Component = type || 'p';
    
    return (
        //@ts-ignore
        <Component className={className}>
            {paragraph}
        </Component>
    );
}