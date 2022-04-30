import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
//const [contactSelected, setContactSelected] = useState(false);


function App() {
  return (
    <div>
      <Navbar />
      <div data-bs-spy="scroll" data-bs-target="#navbarNav" data-bs-offset="0">
      <About />
      <Projects/>
      <Contact/>
      </div>
      <Footer />
    </div>
  );
}



export default App;
