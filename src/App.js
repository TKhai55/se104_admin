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
//Manager

//Organizer
import HomeOrganiozerTier1 from './Pages/Organizer/Home_Organizer_tier1/Home.Organizer.Tier1';
import HomeOrganiozerTier2 from './Pages/Organizer/Home_Organizer_tier2/Home_Organizer_Tier2';
import ChangeRegulations from './Pages/Organizer/ChangeRegulations/ChangeRegulations';
import CreateNewLeague from './Pages/Organizer/CreateNewLeague/CreateNewLeague';
//Organizer

//Admin
import HomeAdmin from './Pages/Administrator/Home/Home_Amin.jsx';
import RegisterClub from './Pages/Manager/RegisterClub/RegisterClub';
import CreateAccount from './Pages/Administrator/CreateAccount/createAccount';
import ManageAccount from './Pages/Administrator/ManageAccount/ManagaAccount';
//Admin


import SearchManager from './Pages/Manager/Search/SearchManager';
import SearchOrganizer from './Pages/Organizer/Search/SearchOrganizer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<SignIn />} />

        {/* Manager */}
        <Route exact path='/manager' element={<HomeManagerTier1 />} />
        <Route exact path='/manager/home' element={<HomeManagerTier2 />} />
        <Route exact path='/manager/home/createCLub' element={<RegisterClub />} />
        <Route exact path='/manager/home/createMatch' element={<AddFixtures />} />
        <Route exact path='/manager/home/createMatch/detailCreateMatch' element={<AddFixtureDetail />} />
        <Route exact path='/manager/home/createResult' element={<AddResult />} />
        <Route exact path='/manager/home/createResult/detailAddResult' element={<DetailAddResult />} />
        <Route exact path='/manager/home/createReport' element={<Create_Report />} />
        {/* Manager */}

        {/* Organizer */}
        <Route exact path='/organizer' element={<HomeOrganiozerTier1 />} />
        <Route exact path='/organizer/home' element={<HomeOrganiozerTier2 />} />
        <Route exact path='/organizer/home/changePolicy' element={<ChangeRegulations />} />
        <Route exact path='/organizer/addLeague' element={<CreateNewLeague />} />

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
