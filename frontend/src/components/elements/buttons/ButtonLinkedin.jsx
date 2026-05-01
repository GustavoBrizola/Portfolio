import Button from "src/components/abstractions/Button.jsx";
import ProfileData from 'src/data/ProfileInfo.json'

export default
function ButtonLinkedin()
{
    return(
        <Button
            Type={'a'}
            ClassName={'ButtonLinkedin'}

            Href={ProfileData.Social[0]}
            Target={'_blank'}
            Rel={'noopener noreferrer'}

            ClassImage={'ButtonLinkedinImage'}
            Image={'images/ico/LogoLinkedin.png'}
            VerticalDiviser={'ButtonLinkedinDiviser'}
            
            Text={'LinkedIn'}
        />
    );
}