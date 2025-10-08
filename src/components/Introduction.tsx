import PillNav from './reactBits/PillNav';
import logo from '/cpu.png';
import LetterGlitch from './reactBits/LetterGlitch';

function Introduction() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <PillNav
          logo={logo}
          items={[
            { label: 'About Me', href: '/about' },
            { label: 'Skills', href: '/services' },
            { label: 'Experience', href: '/contact' },
            { label: 'Education', href: '/contact' },
            { label: 'Contact', href: '/contact' },
          ]}
          activeHref='/'
          className='custom-nav'
          ease='power2.easeOut'
          baseColor='#2f343b'
          pillColor='#00ff88'
          hoveredPillTextColor='#00ff88'
          pillTextColor='#2f343b'
          initialLoadAnimation={true}
        />
      </div>
      <div className='flex items-center justify-center'></div>
      <header className='relative flex items-center justify-center min-h-screen px-6 bg-midnight text-gray-100 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <LetterGlitch
            glitchSpeed={70}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            glitchColors={['#00ff88', '#2f343b', '#1e2329']}
            characters={'ARTHURMURARO 21102004<>@$#'}
          />
        </div>

        <div className='absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_60%)]' />

        <div className='relative z-20 text-center pointer-events-none'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-accent'>
            Arthur Muraro
          </h1>
          <h2 className='mt-2 text-lg md:text-xl text-accentLight'>
            Software Engineer
          </h2>
        </div>
      </header>
    </>
  );
}
export default Introduction;
