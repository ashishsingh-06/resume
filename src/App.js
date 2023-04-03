import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SocialMedia from './components/SocialMedia/SocialMedia';
import { about, experience, projects, socialMedia } from './common/data';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero data={socialMedia}/>
      <About data={{about, experience}}/>
      <Projects data={projects}/>
      <Footer/>
    </div>
  );
}

export default App;
