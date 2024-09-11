import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Workspace from './pages/workspace/Workspace';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Registration from './pages/registration/Registration';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/workspace" element={<Workspace />} />  
        <Route path="/registration" element={<Registration />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
