import Orb from './reactBits/Orb';

function Introduction() {
  return (
    <>
      <header className='relative flex items-center justify-center min-h-screen px-6 bg-midnight text-gray-100 overflow-hidden'>
        <div className='absolute inset-0 z-20 flex items-center justify-center pointer-events-auto'>
          <div className='w-[80vmin] h-[80vmin]'>
            <Orb hoverIntensity={0.1} rotateOnHover hue={130} />
          </div>
        </div>

        <div className='relative z-10 text-center pointer-events-none'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-accent pointer-events-none'>
            Arthur Muraro
          </h1>
          <h2 className='mt-2 text-lg md:text-xl text-gray-400 pointer-events-none'>
            Software Engineer
          </h2>
        </div>
      </header>
    </>
  );
}
export default Introduction;
