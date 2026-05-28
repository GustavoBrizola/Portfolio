import React from "react";

/**
 * Provides dynamic component and abstraction to create a button
 * 
 * @param {Object} props                    - The properties to configure the button.
 * @param {string} [props.type]             - The HTML element type to use (e.g., 'button', 'a'). Default to 'button'
 * @param {string} [props.className]        - CSS class for the button
 * @param {string} [props.href]             - URL for the link if type is 'a'.
 * @param {string} [props.target]           - target attribute for the link.
 * @param {string} [props.rel]              - rel attribute for the link.
 * @param {string} [props.text]             - text to display inside the button.
 * @param {string} [props.imageClass]       - CSS class for the image.
 * @param {string} [props.image]            - The source URL for the image.
 * @param {string} [props.imagePosition]    - Position of the image relative to text ('left' or 'right').
 * @param {string} [props.imageAlt]         - Alternative text for the image.
 * @param {string} [props.verticalDiviser]  - CSS class for the vertical divider.
 */
export default
function Button(props)
{
    /**
     * Destructuring
     * Organizes all properties in one single place
     * Displaying more easily all in one portion of the code
     * Instead using array and number, use names, which is maintainable
     */
    const {
        type, 
        className,
        href,
        target,
        rel,
        text,
        imageClass,
        image,
        imagePosition,
        imageAlt,
        verticalDiviser
    } = props;
    
    // Code here
    const Component = true ? type : 'button';
    const ImageBlock = image &&
    (
        <>
            {imagePosition === 'right' && <div className={verticalDiviser}/>}
            <img className={imageClass} src={image} alt={imagePosition} />
            {imagePosition === 'left' && <div className={verticalDiviser}/>}
        </>
    )
    
    return (
        // @ts-ignore
        <Component className={className} href={href} target={target} rel={rel} {...props}>
            {/* Render image before text if position is 'before' or not specified (default) */}
            {(imagePosition === 'right' ? null : ImageBlock)}
            {text}
            {/* Render image after text if position is 'after' */}
            {(imagePosition === 'right' ? ImageBlock : null)}
        </Component>
    );
}