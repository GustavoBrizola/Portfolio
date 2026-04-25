// Styles
import './ProfileCard.css';

// Scripts
import TruncateText from '../../scripts/TruncateText';

// Json
import ProfileData from '../../data/ProfileInfo.json'

// Abstractions
import List from                    '../abstractions/List';

// Buttons
import ButtonDownloadResume from    '../elements/buttons/ButtonDownloadResume';
import ButtonLinkedin from          '../elements/buttons/ButtonLinkedin';
import ButtonGithub from            '../elements/buttons/ButtonGithub';
import ButtonEmail from             '../elements/buttons/ButtonEmail';
import ButtonWhatsApp from          '../elements/buttons/ButtonWhatsApp';
// CSS
import                              '../elements/buttons/ButtonDownloadResume.css';
import                              '../elements/buttons/ButtonEmail.css';
import                              '../elements/buttons/ButtonGithub.css';
import                              '../elements/buttons/ButtonLinkedin.css';
import                              '../elements/buttons/ButtonWhatsApp.css';

/**
 * Structural profile
 * 
 * @returns The complete Profile Card
 */
export default
function ProfileCard()
{
    // Profile Card Format on HTML
    return (
        <div className='ProfileCard'>
            <div className='ProfileHeader'>
                <div className='ProfileName'>{TruncateText(ProfileData.Name, 50)}</div>
                <div className='ProfilePhrase'>{TruncateText(ProfileData.Phrase, 30)}</div>
            </div>
            <div className='ProfileInfo'>
                <div className='ProfileAge'>
                    <List Type={'a'} Info={ProfileData.Age}/>
                </div>
                <div className='Divider'/>
                <div className='ProfileLocal'>
                    <List Type={'a'} Info={ProfileData.Local[0]}/>
                    <List Type={'a'} Info={ProfileData.Local[1]}/>
                    <List Type={'a'} Info={ProfileData.Local[2]}/>
                </div>
                <div className='Divider'/>
                <div className='ProfileWork'>
                    <List Type={'a'} Info={ProfileData.Work}/>
                </div>
            </div>
            <div className='ProfileDescription'>{TruncateText(ProfileData.Description, 300)}</div>            
            <hr className='HorizontalDiviser'/>
            <div className='ProfileContacts'>
                {/* Contacs and links of various kinds of social*/}
                <ButtonEmail/>
                <ButtonWhatsApp/>
                <ButtonLinkedin/>
                <ButtonGithub/>
            </div>
            <hr className='HorizontalDiviser'/>
            <ButtonDownloadResume/>
        </div>
    );

}