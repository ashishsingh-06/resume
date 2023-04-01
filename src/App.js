import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SocialMedia from './components/SocialMedia/SocialMedia';
import { about, technology } from './common/data';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/* <SocialMedia/> */}
      <About data={{
        about: about,
      }}/>
      <Footer/>
    </div>
  );
}

export default App;
