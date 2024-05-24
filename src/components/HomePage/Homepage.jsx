import '../HomePage/Homepage.css'
import Navbar from "./Navbar";
import Footer from './Footer';
import Card from './Card';

function HomePage() {
  return (
    <div className='body'>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}

export default HomePage;  
