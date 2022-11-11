import './App.css';
import Footer from './Common/Footer/Footer';
import ChangeRegulations from './Pages/Organizer/ChangeRegulations/ChangeRegulations';
import Header from './Pages/Organizer/Header_Organizer/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ChangeRegulations/>
      <Footer />
    </div>
  );
}

export default App;
