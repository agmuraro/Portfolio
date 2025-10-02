import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-midnight min-h-screen text-gray-100'>
      <Introduction />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
