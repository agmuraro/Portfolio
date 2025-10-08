import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className='bg-midnight min-h-screen text-gray-100'>
      <Introduction />
      <main className='px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1.3fr_1.1fr] gap-20 items-start justify-between'>
          <div className='flex flex-col gap-10'>
            <AboutMe cardClass='w-full' />
            <Experience cardClass='w-full' />
            <Education cardClass='w-full' />
          </div>
          <div className='lg:row-span-2 justify-self-end gap-10'>
            <Skills cardClass='w-full' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
