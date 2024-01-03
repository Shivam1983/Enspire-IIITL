import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Event from './components/Events/Event';
import Contact from './components/contact/contact';

const App = () => {
  return <div>
    <section id='Home'> 
     <Navbar />
      <Hero />
    </section>
    <Event />
    <section id='contact'>
      <Contact />
    </section>
  </div>;
};

export default App;
