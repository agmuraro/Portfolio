import AnimatedContent from './reactBits/AnimatedContent';
import { MdOutlineArrowOutward } from 'react-icons/md';

export default function Experience({ cardClass = '' }: { cardClass?: string }) {
  return (
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
        <h2 className='text-3xl font-bold mb-6 text-accent'>Experience</h2>
        <p className='text-gray-300 leading-relaxed mb-6'>
          Throughout my journey, I've gained valuable hands-on experience in
          both frontend and backend development. Each opportunity has
          strengthened my technical expertise, collaboration skills, and ability
          to deliver efficient, user-focused solutions.
        </p>

        <div className='flex flex-col gap-10 text-gray-300'>
          <div className='relative pl-4 border-l-2 border-accent/40'>
            <a
              className='text-xl font-semibold text-accentLight'
              href='https://truechange.com.br/'
              target='_blank'
            >
              Truechange
              <MdOutlineArrowOutward className='inline align-middle ml-1' />
            </a>
            <p className='text-sm text-gray-400 mb-1'>
              Frontend Intern | Mendix
            </p>
            <p className='text-sm text-gray-500 mb-4'>Aug 2023 - Aug 2024</p>

            <ul className='list-disc list-outside pl-5 space-y-1'>
              <li>
                Developed responsive and functional interfaces using the
                low-code platform Mendix, contributing to the delivery of
                scalable and agile solutions.
              </li>
              <li>
                Actively collaborated with cross-functional teams, ensuring
                smooth integration and continuous delivery.
              </li>
              <li>
                Participated in all Scrum ceremonies, improving teamwork and
                incremental delivery skills.
              </li>
              <li>
                Enhanced user experience in partnership with UX/UI designers,
                applying accessibility and usability principles.
              </li>
              <li>
                Tackled complex issues by fixing bugs, optimizing performance,
                and delivering solutions within tight deadlines.
              </li>
              <li>
                Supported requirement gathering and communication with
                stakeholders, aligning technical solutions with business goals.
              </li>
            </ul>
          </div>

          <div className='relative pl-4 border-l-2 border-accent/40'>
            <a
              className='text-xl font-semibold text-accentLight'
              href='https://ibacbrasil.com.br/'
              target='_blank'
            >
              IbacBrasil
              <MdOutlineArrowOutward className='inline align-middle ml-1' />
            </a>
            <p className='text-sm text-gray-400 mb-1'>
              Full Stack Intern | Web Development
            </p>
            <p className='text-sm text-gray-500 mb-4'>Fev 2025 - Jun 2025</p>

            <ul className='list-disc list-outside pl-5 space-y-1'>
              <li>
                Worked on Full Stack development of internal systems using PHP
                with Laravel and Yii 1 frameworks, covering both backend and
                frontend.
              </li>
              <li>
                Developed and maintained dynamic and responsive interfaces with
                HTML, CSS, JavaScript, jQuery, and AJAX, ensuring usability and
                performance.
              </li>
              <li>
                Integrated APIs and implemented complex business rules,
                including MySQL database structuring.
              </li>
              <li>
                Used Composer for dependency management and modular backend
                organization.
              </li>
              <li>
                Utilized Git (Bitbucket) for version control and Jira for agile
                task tracking and team collaboration.
              </li>
              <li>
                Developed in a Linux environment using WSL, improving
                compatibility with production servers.
              </li>
              <li>
                Gained initial experience with AWS services, exploring cloud
                scalability possibilities.
              </li>
              <li>
                Actively participated in sprint meetings, reviews, and testing
                sessions, contributing ideas for technical and UX improvements.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
