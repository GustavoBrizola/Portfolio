// Styles
import './styles/ProfileCard.css';

// Scripts
import TruncateText from '../scripts/TruncateText';

// Json
import ProfileData from '../data/ProfileInfo.json'

// Components
import Data from './Data';
import ButtonDownloadResume from './ButtonDownloadResume';
import ButtonLinkedin from './ButtonLinkedin';
import ButtonGithub from './ButtonGithub';
import ButtonEmail from './ButtonEmail';
import ButtonWhatsApp from './ButtonWhatsApp';

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
                    <Data Type={'a'} Info={ProfileData.Age}/>
                </div>
                <div className='Divider'/>
                <div className='ProfileLocal'>
                    <Data Type={'a'} Info={ProfileData.Local[0]}/>
                    <Data Type={'a'} Info={ProfileData.Local[1]}/>
                    <Data Type={'a'} Info={ProfileData.Local[2]}/>
                </div>
                <div className='Divider'/>
                <div className='ProfileWork'>
                    <Data Type={'a'} Info={ProfileData.Work}/>
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