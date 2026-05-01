import './styles/ProfilePic.css'
import ProfileData from 'src/data/ProfileInfo.json'

// Elements
import ListPersonalInfo from 'src/components/elements/list/ListPersonalInfo';
import 'src/components/elements/list/styles/ListPersonalInfo.css';

export default
function ProfilePic()
{
  return (
    <div className='ProfilePic'>
      <img className='ProfilePicWallpaper'
        src='images/wallpaper/ProfileWallpaper.jpg'
        alt='Wallpaper'
      />
      <div className='ProfilePicContent'>
        <img className='ProfilePicPhoto'
          src='images/profile/ProfilePicPhoto.png'
          alt='Pic'
        />
        {ProfileData.Name}
        <ListPersonalInfo/>
      </div>
    </div>
  )
}