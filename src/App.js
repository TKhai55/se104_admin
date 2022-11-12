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
import CreateNewLeague from './Pages/Organizer/CreateNewLeague/CreateNewLeague';
import CreateAccount from './Pages/Administrator/CreateAccount/createAccount';
import ManageAccount from './Pages/Administrator/ManageAccount/ManagaAccount';
import SearchManager from './Pages/Manager/Search/SearchManager';
import SearchOrganizer from './Pages/Organizer/Search/SearchOrganizer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer />
    </div>
  );
}

export default App;
