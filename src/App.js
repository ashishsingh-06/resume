import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/* <SocialMedia/> */}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
