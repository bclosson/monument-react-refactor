import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing.js';
import Blog from './pages/Blog.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
