import AnimatedContent from './reactBits/AnimatedContent';

export default function AboutMe() {
  return (
    <div className='flex justify-end mb-20'>
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
          className='max-w-3xl mr-20 mb-15 p-6 bg-surface rounded-xl border border-border shadow-lg'
        >
          <h2 className='text-3xl font-bold mb-6 text-accent'>Hard Skills</h2>
        </section>
      </AnimatedContent>
    </div>
  );
}
