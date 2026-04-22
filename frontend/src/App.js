import logo from './logo.svg';
import './App.css';

//import BackendCheck from './api/CheckBackend';
import ProfileCard from './components/ProfileCard';

function App() 
{
  return (
    <div className='App'>
       <header className='App-header'>
          <ProfileCard/>
      </header>
    </div>
  );
}

export default App;