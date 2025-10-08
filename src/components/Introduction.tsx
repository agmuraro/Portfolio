import PillNav from './reactBits/PillNav';
import logo from '/cpu.png';
import TextType from './reactBits/TextType';

function Introduction() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <PillNav
          logo={logo}
          items={[
            { label: 'About Me', href: '/aboutme' },
            { label: 'Skills', href: '/skills' },
            { label: 'Experience', href: '/experience' },
            { label: 'Education', href: '/education' },
            { label: 'Contact', href: '/contact' },
          ]}
          activeHref='/'
          className='custom-nav'
          ease='power3.easeOut'
          baseColor='#2f343b'
          pillColor='#00ff88'
          hoveredPillTextColor='#00ff88'
          pillTextColor='#2f343b'
          initialLoadAnimation={true}
        />
      </div>
      <div className='flex items-center justify-center'></div>
      <header className='relative flex items-center justify-center min-h-screen px-6 text-gray-100 overflow-hidden'>
        <div className='absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_60%)]' />

        <div className='relative z-20 text-center pointer-events-none'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-accent '>
            <TextType
              text={['Arthur Muraro']}
              textColors={['#00ff88']}
              typingSpeed={75}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter='|'
            />
          </h1>
          <h2 className='mt-2 text-lg md:text-xl text-accentLight'>
            <TextType
              text={['Software Engineer']}
              textColors={['#bbf7d0']}
              typingSpeed={75}
              pauseDuration={1000}
              showCursor={false}
              cursorCharacter='|'
            />
          </h2>
        </div>
      </header>
    </>
  );
}
export default Introduction;
