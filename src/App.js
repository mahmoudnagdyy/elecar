import './App.css';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Models from './components/Models';
import Offer from './components/Offer';
import Popular from './components/Popular';
import Powered from './components/Powered';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Popular />
      <Featured />
      <Offer />
      <Models />
      <Footer />
      <Powered />
    </div>
  );
}

export default App;
