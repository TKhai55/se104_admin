import './App.css';
import Footer from './Common/Footer/Footer';
import SignIn from './Pages/Sign In/SignIn/SignIn';


//Manager
import HomeManagerTier1 from './Pages/Manager/Home_Manager_tier1/Home.Manager.Tier1';
import HomeManagerTier2 from './Pages/Manager/Home_Manager_tier2/Home.Manager.Tier2';
import AddFixtures from './Pages/Manager/AddFixtures/AddFixtures';
import AddResult from './Pages/Manager/AddResult/AddResult';
import Create_Report from './Pages/Manager/Create_Report/Create_Report';
import DetailAddResult from './Pages/Manager/DetailAddResult/DetailAddResult';
import AddFixtureDetail from './Pages/Manager/Add_Fixture/Add_Fixture'
import Register_Club from './Pages/Manager/Register_Club/RegisterClub'
import Add_Fixture from './Pages/Manager/Add_Fixture/Add_Fixture'
import SearchManager from './Pages/Manager/Search/SearchManager';
import SearchPLayer from './Pages/Manager/Search/SearchPLayer/SearchPLayer';
import SearchClub from './Pages/Manager/Search/SearchClub/SearchClub';
import SearchCoach from './Pages/Manager/Search/SearchCoach/SearchCoach';

//Manager

//Organizer
import HomeOrganiozerTier1 from './Pages/Organizer/Home_Organizer_tier1/Home.Organizer.Tier1';
import HomeOrganiozerTier2 from './Pages/Organizer/Home_Organizer_tier2/Home_Organizer_Tier2';
import ChangeRegulations from './Pages/Organizer/ChangeRegulations/ChangeRegulations';
import CreateNewLeague from './Pages/Organizer/CreateNewLeague/CreateNewLeague';
import SearchOrganizer from './Pages/Organizer/Search/SearchOrganizer';
import SearchPLayerOr from './Pages/Organizer/Search/SearchPLayer/SearchPLayer';
import SearchClubOr from './Pages/Organizer/Search/SearchClub/SearchClub';
import SearchCoachOr from './Pages/Organizer/Search/SearchCoach/SearchCoach';
//Organizer

//Admin
import HomeAdmin from './Pages/Administrator/Home/Home_Amin.jsx';
import RegisterClub from './Pages/Manager/RegisterClub/RegisterClub';
import CreateAccount from './Pages/Administrator/CreateAccount/createAccount';
import ManageAccount from './Pages/Administrator/ManageAccount/ManagaAccount';
//Admin

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<SignIn />} />

        {/* Manager */}
        <Route exact path='/manager' element={<HomeManagerTier1 />} />
        <Route exact path='/manager/home/:muagiaiID' element={<HomeManagerTier2 />} />
        <Route exact path='/manager/home/:muagiaiID/createCLub' element={<RegisterClub />} />
        <Route exact path='/manager/home/createMatch' element={<AddFixtures />} />
        <Route exact path='/manager/home/createMatch/detailCreateMatch' element={<AddFixtureDetail />} />
        <Route exact path='/manager/home/createResult' element={<AddResult />} />
        <Route exact path='/manager/home/createResult/detailAddResult' element={<DetailAddResult />} />
        <Route exact path='/manager/home/createReport' element={<Create_Report />} />
        <Route exact path='/manager/home/register_club' element={<Register_Club />} />
        <Route exact path='/manager/home/addmatch' element={<Add_Fixture />} />
        <Route exact path='/manager/home/addResult' element={<DetailAddResult />} />
        <Route exact path='/manager/home/search' element={<div className='manager_search'><SearchManager /></div>} />
        <Route exact path='/manager/home/searchplayer' element={(<div><SearchManager /> <SearchPLayer /></div>)} />
        <Route exact path='/manager/home/searchcoach' element={(<div><SearchManager /> <SearchCoach /></div>)} />
        <Route exact path='/manager/home/searchclub' element={(<div><SearchManager /> <SearchClub /></div>)} />
        {/* Manager */}

        {/* Organizer */}
        <Route exact path='/organizer' element={<HomeOrganiozerTier1 />} />
        <Route exact path='/organizer/home/:muagiaiID' element={<HomeOrganiozerTier2 />} />
        <Route exact path='/organizer/home/changePolicy' element={<ChangeRegulations />} />
        <Route exact path='/organizer/addLeague' element={<CreateNewLeague />} />
        <Route exact path='/organizer/home/search' element={<div className='organizer_search'><SearchOrganizer /></div>} />
        <Route exact path='/organizer/home/searchplayer' element={(<div><SearchOrganizer /> <SearchPLayerOr /></div>)} />
        <Route exact path='/organizer/home/searchcoach' element={(<div><SearchOrganizer /> <SearchCoachOr /></div>)} />
        <Route exact path='/organizer/home/searchclub' element={(<div><SearchOrganizer /> <SearchClubOr /></div>)} />

        {/* Organizer */}


        {/* Admin */}
        <Route exact path='/admin' element={<HomeAdmin />} />
        <Route exact path='/admin/createAccount' element={<CreateAccount />} />
        <Route exact path='/admin/manageAccount' element={<ManageAccount />} />
        {/* Admin */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
