import AnimatedContent from './reactBits/AnimatedContent';
import { MdOutlineEmail, MdOutlineArrowOutward } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact({ cardClass = '' }: { cardClass?: string }) {
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
          id='contact'
          className={`w-full p-6 bg-surface rounded-xl border border-border shadow-lg ${cardClass}`}
        >
          <h2 className='text-3xl font-bold mb-6 text-accent'>Contact</h2>

          <p className='text-gray-300 leading-relaxed mb-8'>
            Feel free to reach out for collaboration, opportunities, or just a
            friendly chat!
          </p>

          <div className='flex flex-col gap-6 text-gray-300'>
            <div className='flex items-center gap-3'>
              <MdOutlineEmail className='text-accent text-2xl' />
              <div className='flex flex-wrap items-center gap-1'>
                <span>Mail me from</span>
                <a
                  href='https://mail.google.com/mail/?view=cm&to=arthurmuraro18@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accentLight font-medium hover:underline flex items-center gap-1'
                >
                  G-mail
                  <MdOutlineArrowOutward className='inline-block text-base' />
                </a>
                <span>or</span>
                <a
                  href='mailto:arthurmuraro18@gmail.com'
                  className='text-accentLight font-medium hover:underline flex items-center gap-1'
                >
                  your preferred mail portal
                  <MdOutlineArrowOutward className='inline-block text-base' />
                </a>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <FaLinkedin className='text-accent text-2xl' />
              <a
                href='https://www.linkedin.com/in/arthurmuraro/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accentLight font-medium hover:underline flex items-center gap-1'
              >
                LinkedIn
                <MdOutlineArrowOutward className='inline-block text-base' />
              </a>
            </div>

            <div className='flex items-center gap-3'>
              <FaGithub className='text-accent text-2xl' />
              <a
                href='https://github.com/agmuraro'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accentLight font-medium hover:underline flex items-center gap-1'
              >
                GitHub
                <MdOutlineArrowOutward className='inline-block text-base' />
              </a>
            </div>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
}
