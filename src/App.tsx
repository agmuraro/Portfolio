import { useState } from 'react';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';

type Tab = 'profile' | 'work' | 'contact';

function App() {
  const [tab, setTab] = useState<Tab>('profile');

  const tabBtn = (value: Tab, label: string) => (
    <button
      onClick={() => setTab(value)}
      className={`px-4 py-2 rounded-lg border transition-colors ${
        tab === value
          ? 'border-accent text-accent bg-surface'
          : 'border-border text-gray-300 hover:text-gray-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className='min-h-screen text-gray-100'>
      <Introduction />

      <main className='px-6 lg:px-10'>
        <div className='mx-auto max-w-5xl py-12'>
          <div className='flex flex-wrap gap-3 mb-8'>
            {tabBtn('profile', 'Profile')}
            {tabBtn('work', 'Work')}
            {tabBtn('contact', 'Contact')}
          </div>

          {tab === 'profile' && (
            <div className='flex flex-col gap-8'>
              <AboutMe cardClass='w-full' />
              <Skills cardClass='w-full' />
              <Education cardClass='w-full' />
            </div>
          )}

          {tab === 'work' && (
            <div className='flex flex-col gap-8'>
              <Experience cardClass='w-full' />
              <Projects cardClass='w-full' />
            </div>
          )}

          {tab === 'contact' && (
            <div className='flex flex-col gap-8'>
              <Contact cardClass='w-full' />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
