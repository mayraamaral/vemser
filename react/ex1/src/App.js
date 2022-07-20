import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {
  if(window.location.pathname === '/home'){
    return <Home />
  } else if(window.location.pathname === '/about'){
    return <About />
  } else if(window.location.pathname === '/contact'){
    return <Contact />
  }
}

export default App;
