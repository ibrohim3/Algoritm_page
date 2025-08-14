import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Courses from './components/Courses';

function App() {
  return (
    <div className="container2">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/events" element={<Events />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
