
import './App.css';



import Nav from './components/Nav';
import './components/Nav.css'
import ImageCard from './components/ImageCard';
import './components/ImageCard.css'
import ImageGallery from './components/ImageGallery';
import './components/Gallery.css'

function App() {
  return (
    <>

    <div className='navbar'>
      <Nav/>
     
    </div>
    {/* <div>
      <ImageCard/>
    </div> */}

    <div>
      <ImageGallery/>
    </div>
    </>
  );
}

export default App;
