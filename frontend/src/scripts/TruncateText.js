/**
 * Limits the amount of characters allowed.
 * If the string exceed the limit, will ignore the rest.
 *
 * @param {*} text 
 * @param {*} limit 
 * @returns 
 */
export default
function TruncateText(text, limit)
{
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit): text;
}