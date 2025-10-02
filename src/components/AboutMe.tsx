import AnimatedContent from './reactBits/AnimatedContent';

export default function AboutMe() {
  return (
    <div className='flex justify-start mb-20'>
      <AnimatedContent
        distance={100}
        direction='vertical'
        reverse={false}
        duration={1}
        ease='power3.out'
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <section
          id='about'
          className='max-w-3xl ml-20 p-6 bg-surface rounded-xl border border-border shadow-lg'
        >
          <h2 className='text-3xl font-bold mb-6 text-accent'>About Me</h2>

          <p className='text-gray-300 leading-relaxed mb-4'>
            My name is Arthur Muraro, I'm currently 20 years old, and I live in
            Curitiba, Paraná, Brazil.
          </p>

          <p className='text-gray-300 leading-relaxed mb-4'>
            I'm a{' '}
            <span className='font-semibold text-accentLight'>
              Backend Developer
            </span>{' '}
            with solid experience in{' '}
            <span className='font-semibold text-accentLight'>API</span> and{' '}
            <span className='font-semibold text-accentLight'>database</span>{' '}
            development and maintenance. Currently, I’m expanding my expertise
            into{' '}
            <span className='font-semibold text-accentLight'>
              Full-Stack Development
            </span>{' '}
            by studying{' '}
            <span className='font-semibold text-accentLight'>
              Frontend technologies
            </span>
            , while also strengthening my skills in{' '}
            <span className='font-semibold text-accentLight'>
              cloud computing
            </span>{' '}
            and{' '}
            <span className='font-semibold text-accentLight'>
              container orchestration
            </span>
            . I'm seeking a{' '}
            <span className='font-semibold text-accentLight'>
              Junior Developer
            </span>{' '}
            opportunity where I can contribute with{' '}
            <span className='font-semibold text-accentLight'>efficient</span>{' '}
            and <span className='font-semibold text-accentLight'>scalable</span>{' '}
            solutions by applying{' '}
            <span className='font-semibold text-accentLight'>
              software development best practices
            </span>
            .
          </p>
        </section>
      </AnimatedContent>
    </div>
  );
}
