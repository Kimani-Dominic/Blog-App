import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home'; //Home component
import {
  BrowserRouter as Router,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar isAuthenticated={undefined} user={undefined} handleCategoryClick={undefined} handleLogout={undefined} />
      <Home />
    </Router>
   
  );
}

export default App;