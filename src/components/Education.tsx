import AnimatedContent from './reactBits/AnimatedContent';
import { MdOutlineArrowOutward } from 'react-icons/md';

export default function Education({ cardClass = '' }: { cardClass?: string }) {
  return (
    <>
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
          id='experience'
          className={`w-full p-6 bg-surface rounded-xl border border-border shadow-lg ${cardClass}`}
        >
          <h2 className='text-3xl font-bold mb-6 text-accent'>
            Education and Languages
          </h2>

          <p className='text-gray-300 leading-relaxed mb-6'>
            Throughout my academic path, I've deepened my understanding of
            software engineering principles while continuously improving my
            technical and analytical skills. My education has also strengthened
            my adaptability, teamwork, and commitment to lifelong learning.
          </p>

          <div className='relative pl-4 border-l-2 border-accent/40'>
            <a
              className='text-xl font-semibold text-accentLight'
              href='https://www.pucpr.br/'
              target='_blank'
            >
              PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ - PUCPR
              <MdOutlineArrowOutward className='inline align-middle ml-1' />
            </a>
            <p className='text-sm text-gray-400 mb-1'>
              Bachelor's in Software Engineering
            </p>
            <p className='text-sm text-gray-500 mb-4'>Feb 2022 - Nov 2025</p>

            <p className='text-gray-300 leading-relaxed mb-6'>
              The Pontifical Catholic University of Paraná (PUCPR) is one of
              Brazil's leading institutions in technology and innovation,
              recognized for its strong academic programs and emphasis on
              ethical, human-centered education.
            </p>
          </div>

          <div className='relative pl-4 border-l-2 border-accent/40'>
            <h3 className='text-xl font-semibold text-accentLight'>
              Languages
            </h3>
            <p className='text-gray-300 mt-1'>
              Portuguese - <span className='text-gray-400'>Native</span> |
              English - <span className='text-gray-400'>C1</span> | Italian -{' '}
              <span className='text-gray-400'>A1</span>
            </p>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
}
