import './App.css';
import Footer from './Common/Footer/Footer';
import SignIn from './Pages/Sign In/SignIn/SignIn';
import Home from './Pages/Manager/Home_tier1/Home';
import Header from './Pages/Organizer/Header_Organizer/Header'
import SearchManager from './Pages/Manager/Search/SearchManager';
import SearchOrganizer from './Pages/Organizer/Search/SearchOrganizer';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Home/>
      <SearchManager/>
      <Footer />
    </div>
  );
}

export default App;
