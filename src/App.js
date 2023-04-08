  import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Book from '../src/components/Book';
import Working from '../src/components/Working';
import Testimonials from '../src/components/Testimonials';
import Our from '../src/components/Our';
import Affiliate from '../src/components/Affiliate';
import Footer from '../src/components/Footer';



function App() {
  return (
    <div>
      <Hero />
      <About />
      <Book />
      <Working />
      <Testimonials />
      <Our />
      <Affiliate />
      <Footer />
    </div>
  );
}

export default App;
