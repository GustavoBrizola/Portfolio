import Button from "../../abstractions/Button.jsx";

/**
 * 
 * @returns a new tab with the pdf display
 */
export default
function ButtonDownloadResume()
{
    return(
        <Button
            Type={'a'}
            ClassName={'ButtonDownloadResume'}

            Href={'/Portfolio/documents/GustavoBrizolaResume.pdf'}
            Target={'_blank'}
            Rel={'noopener noreferrer'}
            
            Text={'View Resume'}
        />
    );
}