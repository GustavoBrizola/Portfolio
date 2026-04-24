import Button from "./Button";

export default
function ButtonDownloadResume(props)
{
    return(
        <Button
            Type={'a'}
            ClassName={'ProfileResume'}
            Href={'/documents/Placeholder.pdf'}
            Target={'_blank'}
            Rel={'noopener noreferrer'}
            Text={'Download Resume'}
        />
    );
}