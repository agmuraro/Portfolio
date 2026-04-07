import { MdOutlineArrowOutward } from 'react-icons/md';
import AnimatedContent from './reactBits/AnimatedContent';

export default function Projects({ cardClass = '' }: { cardClass?: string }) {
  return (
    <div className='flex justify-start'>
      <AnimatedContent
        distance={50}
        direction='vertical'
        reverse={false}
        duration={0.8}
        ease='power3.out'
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0}
        delay={0}
      >
        <section
          id='projects'
          className={`w-full p-6 bg-surface rounded-xl border border-border shadow-lg ${cardClass}`}
        >
          <h2 className='text-3xl font-bold mb-6 text-accent'>Projects</h2>

          <p className='text-gray-300 leading-relaxed mb-8'>
            Below are some of the projects I have developed.
          </p>

          <div className='mb-8'>
            <h3 className='text-xl font-semibold text-accentLight mb-2'>
              PentestHub
            </h3>

            <p className='text-gray-300 leading-relaxed mb-3'>
              A web-based platform for automating penetration testing workflows.
              PentestHub integrates tools such as
              <span className='font-semibold text-accentLight'> Nmap</span>,
              <span className='font-semibold text-accentLight'> Nikto</span>,
              <span className='font-semibold text-accentLight'> Hydra</span>,
              and
              <span className='font-semibold text-accentLight'>
                {' '}
                Metasploit
              </span>
              , providing structured scan execution, log management, and
              automated PDF report generation. The backend is built with
              <span className='font-semibold text-accentLight'> FastAPI</span>,
              focusing on modular architecture, authentication, and scalability.
            </p>

            <a
              href='https://github.com/agmuraro/PentestHub'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-accent hover:text-accentLight transition-colors font-medium'
            >
              View repository on GitHub
              <MdOutlineArrowOutward className='inline align-middle' />
            </a>
          </div>

          <div className='mb-8'>
            <h3 className='text-xl font-semibold text-accentLight mb-2'>
              Simple Calculator
            </h3>

            <p className='text-gray-300 leading-relaxed mb-3'>
              A simple calculator that features
              <span className='font-semibold text-accentLight'> addition</span>,
              <span className='font-semibold text-accentLight'>
                {' '}
                subtraction
              </span>
              ,
              <span className='font-semibold text-accentLight'>
                {' '}
                multiplication
              </span>
              , and
              <span className='font-semibold text-accentLight'> division</span>,
              built with
              <span className='font-semibold text-accentLight'> React</span>.
            </p>

            <a
              href='https://github.com/agmuraro/Calculator'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-accent hover:text-accentLight transition-colors font-medium'
            >
              View repository on GitHub
              <MdOutlineArrowOutward className='inline align-middle' />
            </a>
          </div>

          <div className='mb-8'>
            <h3 className='text-xl font-semibold text-accentLight mb-2'>
              Notes App
            </h3>

            <p className='text-gray-300 leading-relaxed mb-3'>
              A simple and responsive
              <span className='font-semibold text-accentLight'>
                {' '}
                notes application
              </span>{' '}
              built with
              <span className='font-semibold text-accentLight'> React</span>,
              <span className='font-semibold text-accentLight'>
                {' '}
                TypeScript
              </span>
              , and
              <span className='font-semibold text-accentLight'>
                {' '}
                Vite
              </span>. This app allows users to
              <span className='font-semibold text-accentLight'> create</span>,
              <span className='font-semibold text-accentLight'> manage</span>,
              and
              <span className='font-semibold text-accentLight'>
                {' '}
                track their notes
              </span>{' '}
              with a
              <span className='font-semibold text-accentLight'>
                {' '}
                clean interface
              </span>{' '}
              and
              <span className='font-semibold text-accentLight'>
                {' '}
                dark mode support
              </span>
              .
            </p>

            <a
              href='https://notes-arthurmuraro.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-accent hover:text-accentLight transition-colors font-medium'
            >
              View live demo
              <MdOutlineArrowOutward className='inline align-middle' />
            </a>
          </div>
        </section>
      </AnimatedContent>
    </div>
  );
}
