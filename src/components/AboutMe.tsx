export default function AboutMe() {
  return (
    <section
      id='about'
      className='max-w-3xl mx-auto p-6 bg-surface rounded-xl border border-border shadow-lg'
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
        development and maintenance. Currently, I’m expanding my expertise into{' '}
        <span className='font-semibold text-accentLight'>
          Full-Stack Development
        </span>{' '}
        by studying{' '}
        <span className='font-semibold text-accentLight'>
          Frontend technologies
        </span>
        , while also strengthening my skills in{' '}
        <span className='font-semibold text-accentLight'>cloud computing</span>{' '}
        and{' '}
        <span className='font-semibold text-accentLight'>
          container orchestration
        </span>
        . I'm seeking a{' '}
        <span className='font-semibold text-accentLight'>Junior Developer</span>{' '}
        opportunity where I can contribute with{' '}
        <span className='font-semibold text-accentLight'>efficient</span> and{' '}
        <span className='font-semibold text-accentLight'>scalable</span>{' '}
        solutions by applying{' '}
        <span className='font-semibold text-accentLight'>
          software development best practices
        </span>
        .
      </p>
    </section>
  );
}
