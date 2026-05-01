import './MainPage.css'

// elements
import TopBar from      '../components/composites/TopBar';
import AboutMeCard from '../components/composites/AboutMeCard';
import ProfilePic from  '../components/composites/ProfilePic';
import BottomBar from   '../components/composites/BottomBar';

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