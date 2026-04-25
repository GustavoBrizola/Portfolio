import Button from "../../abstractions/Button.jsx";
import ProfileData from '../../../data/ProfileInfo.json'


export default
function ButtonGithub()
{
    return(
        <Button
            Type={'a'}
            ClassName={'ButtonGithub'}
            
            Href={ProfileData.Social[1]}
            Target={'_blank'}
            Rel={'noopener noreferrer'}
            
            ClassImage={'ButtonGithubImage'}
            Image={'images/ico/LogoGithub.png'}
            VerticalDiviser={'ButtonGithubDiviser'}

            Text={'GitHub'}
        />
    )
}