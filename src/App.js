import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';

function App() {
  return (
    <>
    <Particles
    className='particles-canvas'
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: 'square',
            stroke: {
              width: 6,
              color: '#f9ab00'
            }
          }
        }
      }}
    />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
    </>
  );
}

export default App;
