import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home'; //Home component
import Posts from './components/Favourite_Posts'; //Posts Components
import Tags  from './components/Tags'; //Tag components
import Recent_Posts from './components/Recent_Posts'; //Recent Posts
import Footer from './components/Footer'; //Footer section
import LoginForm from './components/Login';

import {
  BrowserRouter as Router, Routes , Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar isAuthenticated={undefined} user={undefined} handleCategoryClick={undefined} handleLogout={undefined} />
      <Home />
      <Posts />
      <Tags />
      <Recent_Posts />
      <Footer />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      
    </Router>
   
  );
}

export default App;