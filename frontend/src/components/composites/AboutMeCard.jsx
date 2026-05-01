import ProfileData from 'src/data/ProfileInfo.json'
import './styles/AboutMeCard.css'

export default
function AboutMeCard()
{
    return (
        <div className="AboutMeCard">
            <div className='AboutMeCardTitle'>About Me</div>
            {ProfileData.Description}
        </div>
    )
}