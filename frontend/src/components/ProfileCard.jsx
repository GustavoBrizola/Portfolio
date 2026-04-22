// Styles
import './styles/ProfileCard.css';

// Scripts
import TruncateText from '../scripts/TruncateText';

// Json
import ProfileData from '../data/ProfileInfo.json'

// Components
import Button from './Button';
import Data from './Data';

/**
 * Structural profile
 * 
 * @returns The complete Profile Card
 */
export default
function ProfileCard()
{
    const ButtonChars =
    {
        Type: 'a',
        ClassName: 'Profilelinkedin',
        Href: ProfileData.Social[0],
        Target: '_blank',
        Rel: 'noopener noreferrer',
        ClassImage: 'PhoneImage',
        Image: '/images/ico/InBug-White.png',
        VerticalDiviser: 'Divider',
        Text: 'LinkedIn',
    }

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
                <div>
                    <Button Type={'a'} ClassName={'ProfileEmail'} Href={`mailto:${ProfileData.Contact[0]}`} ClassImage={'PhoneImage'} Image={'/images/ico/gmail.png'} VerticalDiviser={'Divider'} Text={'Email'}/>
                    <Button Type={'a'} ClassName={'ProfilePhone'} Href={`https://wa.me/${ProfileData.Contact[1].replace(/\s/g, '').replace('+', '')}`} Target={'_blank'} Rel={'noopener noreferrer'} ClassImage={'PhoneImage'} Image={'/images/ico/Digital_Glyph_White_RGB_2026.png'} VerticalDiviser={'Divider'} Text={'WhatsApp'}/>
                    
                    <Button
                        Type={'a'}
                        ClassName={'Profilelinkedin'}
                        Href={ProfileData.Social[0]}
                        Target={'_blank'}
                        Rel={'noopener noreferrer'}
                        ClassImage={'PhoneImage'}
                        Image={'/images/ico/InBug-White.png'}
                        VerticalDiviser={'Divider'}
                        Text={'LinkedIn'}
                    />
                    
                    <Button
                        Type={'a'}
                        ClassName={'ProfileGithub'}
                        Href={ProfileData.Social[1]}
                        Target={'_blank'}
                        Rel={'noopener noreferrer'}
                        ClassImage={'PhoneImage'}
                        Image={'/images/ico/GitHub_Invertocat_White.png'}
                        VerticalDiviser={'Divider'}
                        Text={'GitHub'}
                    />
                    
                </div>
            </div>

            <hr className='HorizontalDiviser'/>

            <Button
                Type={'a'}
                ClassName={'ProfileResume'}
                Href={'/documents/Placeholder.pdf'}
                Target={'_blank'}
                Rel={'noopener noreferrer'}
                
                Text={'Download Resume'}
            />

        </div>
    );

}