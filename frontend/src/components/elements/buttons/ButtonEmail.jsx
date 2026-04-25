import Button from "../../abstractions/Button.jsx";
import ProfileData from '../../../data/ProfileInfo.json'

export default
function ButtonEmail()
{
    return(
        <Button 
            Type={'a'} 
            ClassName={'ButtonEmail'} 
            Href={`mailto:${ProfileData.Contact?.[0] ?? ''}`} 
            ClassImage={'ButtonEmailImage'} 
            Image={'images/ico/LogoGmail.png'} 
            VerticalDiviser={'ButtonEmailDiviser'} 
            Text={'Email'}
        />                    
    )
}