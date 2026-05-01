import './MainPage.css'

// elements
import TopBar from      'src/components/composites/TopBar';
import AboutMeCard from 'src/components/composites/AboutMeCard';
import ProfilePic from  'src/components/composites/ProfilePic';
import BottomBar from   'src/components/composites/BottomBar';

export default
function MainPage()
{
    return (
        <div className='MainPage'>
            <TopBar/>
            <header className='MainPageHeader'>
                <ProfilePic/>
                <div className='CardsRow'>
                    <AboutMeCard/>
                </div>
            </header>
            <BottomBar/>
        </div>
    )
}