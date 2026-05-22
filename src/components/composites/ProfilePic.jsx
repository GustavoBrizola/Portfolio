import React from 'react';

import ProfileData from 'json/ProfileData.json'
import List from 'components/abstractions/List';

import 'components/styles/ProfilePic.css'

/**
 * 
 * 
 */
export default
function ProfilePic()
{
  const imageWallpaper = {
    src: 'images/wallpaper/ProfileWallpaper.jpg',
    alt: 'Wallpaper',
  }
  const imageProfilePic = {
    src: 'images/profile/ProfilePicPhoto.png',
    alt: 'Pic',
  }

  return (
    <div className='ProfilePic'>
      <img className='ProfilePicWallpaper' src={imageWallpaper.src} alt={imageWallpaper.alt}/>

      <div className='ProfilePicContent'>
        <img className='ProfilePicPhoto' src={imageProfilePic.src} alt={imageProfilePic.alt}/>
        
        {ProfileData.Name}

        <div className="ListPersonalInfo">
            <List Info={ProfileData.Age}/>
            <div className='ListPersonalInfo_Diviser'/>

            <List ClassName={'ListPersonalInfo_Local'} Info={ProfileData.Local}/>
            <div className='ListPersonalInfo_Diviser'/>

            <List Info={ProfileData.Work}/>
        </div>

      </div>
    </div>
  )
}