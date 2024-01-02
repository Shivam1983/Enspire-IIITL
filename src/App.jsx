import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Event from './components/Events/Event';

const App = () => {
  return <div>
    <section id='Home'> 
      <Navbar />
      <Hero />
    </section>
    <section id='Events'></section>
    <Event />
    
    <section id='Gallery'>Gallery</section>
    <section id='Sponsors'>sponsors</section>
    <section id='contact'>CONTACT</section>
  </div>;
};

export default App;
