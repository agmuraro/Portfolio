import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import LetterGlitch from './components/reactBits/LetterGlitch';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className=' min-h-screen text-gray-100'>
        <div className='fixed inset-0 -z-10 pointer-events-none'>
          <LetterGlitch
            glitchSpeed={70}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            glitchColors={['#00ff88', '#2f343b', '#1e2329']}
            characters={'ARTHURMURARO 21102004<>@$#'}
          />
        </div>
        <Introduction />
        <main className='px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-[1.3fr_1.1fr] gap-20 items-start justify-between'>
            <div className='flex flex-col gap-10'>
              <AboutMe cardClass='w-full' />
              <Skills cardClass='w-full' />
            </div>
            <div className='lg:row-span-2 justify-self-end flex flex-col gap-10'>
              <Experience cardClass='w-full' />
              <Education cardClass='w-full' />
              <Contact cardClass='w-full' />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
