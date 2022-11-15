import './App.css';
import Footer from './Common/Footer/Footer';
import Header from './Pages/Organizer/Header_Organizer/Header';
import SignIn from './Pages/Sign In/SignIn/SignIn';
import HomeManagerTier1 from './Pages/Manager/Home_Manager_tier1/Home.Manager.Tier1';
import HomeManagerTier2 from './Pages/Manager/Home_Manager_tier2/Home.Manager.Tier2';
import HomeOrganiozerTier1 from './Pages/Organizer/Home_Organizer_tier1/Home.Organizer.Tier1';
import HomeOrganiozerTier2 from './Pages/Organizer/Home_Organizer_tier2/Home_Organizer_Tier2';
import HomeAdmin from './Pages/Administrator/Home/Home_Amin.jsx';
import RegisterClub from './Pages/Manager/RegisterClub/RegisterClub';
import Register_Club from './Pages/Manager/Register_Club/RegisterClub';
import CreateNewLeague from './Pages/Organizer/CreateNewLeague/CreateNewLeague';
import CreateAccount from './Pages/Administrator/CreateAccount/createAccount';
import ManageAccount from './Pages/Administrator/ManageAccount/ManagaAccount';
import SearchManager from './Pages/Manager/Search/SearchManager';
import SearchOrganizer from './Pages/Organizer/Search/SearchOrganizer';
import ChangeRegulations from './Pages/Organizer/ChangeRegulations/ChangeRegulations';
import SearchClubOrganizer from './Pages/Organizer/Search/SearchClub/SearchClub';
import SearchCoachOrganizer from './Pages/Organizer/Search/SearchCoach/SearchCoach';
import SearchPLayerOrganizer from './Pages/Organizer/Search/SearchPLayer/SearchPLayer';
import SearchClubManager from './Pages/Manager/Search/SearchClub/SearchClub';
import SearchCoachManager from './Pages/Manager/Search/SearchCoach/SearchCoach';
import SearchPLayerManager from './Pages/Manager/Search/SearchPLayer/SearchPLayer';
import AddFixtures from './Pages/Manager/AddFixtures/AddFixtures';
import AddFixture from './Pages/Manager/Add_Fixture/Add_Fixture';
import AddReSult from './Pages/Manager/AddResult/AddResult'
import DetailAddResult from './Pages/Manager/DetailAddResult/DetailAddResult'
import CreateReport from './Pages/Manager/Create_Report/Create_Report'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/Organizer' element={<HomeOrganiozerTier1 />} />
        <Route path='/Organizer/HomePage' element={<HomeOrganiozerTier2 />} />
        <Route path='/Organizer/CreateNewLeague' element={<CreateNewLeague />} />
        <Route path='/Organizer/ChangeRegulations' element={<ChangeRegulations/>} />
        <Route path='/Organizer/Search' element={(<div className='Organizer_Search'><SearchOrganizer/></div>)} />
        <Route path='/Organizer/Search/Player' element={(<div className='Organizer_Search'><SearchOrganizer/><SearchPLayerOrganizer /></div>)}/>
        <Route path='/Organizer/Search/Coach' element={(<div className='Organizer_Search'><SearchOrganizer/><SearchCoachOrganizer /></div>)}/>
        <Route path='/Organizer/Search/Club' element={(<div className='Organizer_Search'><SearchOrganizer/><SearchClubOrganizer /></div>)}/>
        
        {/* --------------------------- */}
        <Route path='/Manager' element={<HomeManagerTier1 />} />
        <Route path='/Manager/HomePage' element={<HomeManagerTier2 />} />
        <Route path='/Manager/RegisterClub' element={<RegisterClub/>} />
        <Route path='/Manager/Register_Club' element={<Register_Club/>} />
        <Route path='/Manager/AddFixtures' element={<AddFixtures/>} />
        <Route path='/Manager/AddFixtures/AddFixture' element={<AddFixture/>} />
        <Route path='/Manager/AddReSult' element={<AddReSult/>} />
        <Route path='/Manager/CreateReport' element={<CreateReport/>} />
        <Route path='/Manager/AddReSult/DetailAddResult' element={<DetailAddResult/>} />
        <Route path='/Manager/Search' element={(<div className='Manager_Search'><SearchManager/></div>)} />
        <Route path='/Manager/Search/Player' element={(<div className='Manager_Search'><SearchManager/><SearchPLayerManager /></div>)}/>
        <Route path='/Manager/Search/Coach' element={(<div className='Manager_Search'><SearchManager/><SearchCoachManager /></div>)}/>
        <Route path='/Manager/Search/Club' element={(<div className='Manager_Search'><SearchManager/><SearchClubManager /></div>)}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
