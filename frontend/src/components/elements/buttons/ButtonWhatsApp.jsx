import Button from "../../abstractions/Button.jsx";
import ProfileData from '../../../data/ProfileInfo.json'

export default
function ButtonWhatsApp()
{
    return(
        <Button 
            Type={'a'} 
            ClassName={'ButtonWhatsApp'} 
            Href={`https://wa.me/${(ProfileData.Contact?.[1] ?? '').replace(/\s/g, '').replace(/\+/g, '')}`}
            
            Target={'_blank'} 
            Rel={'noopener noreferrer'} 

            ClassImage={'ButtonWhatsAppImage'} 
            Image={'images/ico/LogoWhatsApp.png'} 
            VerticalDiviser={'ButtonWhatsAppDiviser'} 
            Text={'WhatsApp'}
        />
    )
}