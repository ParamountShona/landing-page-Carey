{/* import './App.css';*/}
import Banner from '/Banner';
import Navbar from '/Navbar';
import AboutSection from './AboutSection';
import Contact from './Contact';
import Declarations from './Declarations';
import Footer from './Footer';


    function App() {
        return (
            <div className="App">

                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" /> because the Navbar contains the logo for this site}
                        <p>
                            Edit<code>src/ App.js</code> and save to reload.
            </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
              </a>*/}
        <Navbar />
        <Banner />
                </header>
        <AboutSection />
        <Declarations />
        <Footer />


    </div>
  );
}

export default App;
