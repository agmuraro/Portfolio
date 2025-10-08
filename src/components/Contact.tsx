import AnimatedContent from './reactBits/AnimatedContent';

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
          id='experience'
          className={`w-full p-6 bg-surface rounded-xl border border-border shadow-lg ${cardClass}`}
        >
          <h2 className='text-3xl font-bold mb-6 text-accent'>Contact</h2>
        </section>
      </AnimatedContent>
    </>
  );
}
