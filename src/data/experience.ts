import type { ExperienceItem } from '@/types/content';
import type { Locale } from '@/i18n/types';

export const experience: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      title: 'Truechange',
      url: 'https://truechange.com.br/',
      subtitle: 'Frontend Intern | Mendix',
      period: 'Aug 2023 - Aug 2024',
      highlights: [
        'Developed responsive and functional interfaces using the low-code platform Mendix, contributing to the delivery of scalable and agile solutions.',
        'Actively collaborated with cross-functional teams, ensuring smooth integration and continuous delivery.',
        'Participated in all Scrum ceremonies, improving teamwork and incremental delivery skills.',
        'Enhanced user experience in partnership with UX/UI designers, applying accessibility and usability principles.',
        'Tackled complex issues by fixing bugs, optimizing performance, and delivering solutions within tight deadlines.',
        'Supported requirement gathering and communication with stakeholders, aligning technical solutions with business goals.',
      ],
    },
    {
      title: 'IbacBrasil',
      url: 'https://ibacbrasil.com.br/',
      subtitle: 'Full Stack Intern | Web Development',
      period: 'Feb 2025 - Jun 2025',
      highlights: [
        'Worked on Full Stack development of internal systems using PHP with Laravel and Yii 1 frameworks, covering both backend and frontend.',
        'Developed and maintained dynamic and responsive interfaces with HTML, CSS, JavaScript, jQuery, and AJAX, ensuring usability and performance.',
        'Integrated APIs and implemented complex business rules, including MySQL database structuring.',
        'Used Composer for dependency management and modular backend organization.',
        'Utilized Git (Bitbucket) for version control and Jira for agile task tracking and team collaboration.',
        'Developed in a Linux environment using WSL, improving compatibility with production servers.',
        'Gained initial experience with AWS services, exploring cloud scalability possibilities.',
        'Actively participated in sprint meetings, reviews, and testing sessions, contributing ideas for technical and UX improvements.',
      ],
    },
  ],
  pt: [
    {
      title: 'Truechange',
      url: 'https://truechange.com.br/',
      subtitle: 'Estagiário Frontend | Mendix',
      period: 'Ago 2023 - Ago 2024',
      highlights: [
        'Desenvolvi interfaces responsivas e funcionais utilizando a plataforma low-code Mendix, contribuindo para a entrega de soluções escaláveis e ágeis.',
        'Colaborei ativamente com equipes multidisciplinares, garantindo integração e entrega contínua.',
        'Participei de todas as cerimônias de Scrum, aprimorando habilidades de trabalho em equipe e entrega incremental.',
        'Aprimorei a experiência do usuário em parceria com designers de UX/UI, aplicando princípios de acessibilidade e usabilidade.',
        'Resolvi problemas complexos corrigindo bugs, otimizando performance e entregando soluções dentro de prazos apertados.',
        'Apoiei o levantamento de requisitos e a comunicação com stakeholders, alinhando soluções técnicas aos objetivos do negócio.',
      ],
    },
    {
      title: 'IbacBrasil',
      url: 'https://ibacbrasil.com.br/',
      subtitle: 'Estagiário Full Stack | Desenvolvimento Web',
      period: 'Fev 2025 - Jun 2025',
      highlights: [
        'Atuei no desenvolvimento Full Stack de sistemas internos utilizando PHP com os frameworks Laravel e Yii 1, abrangendo backend e frontend.',
        'Desenvolvi e mantive interfaces dinâmicas e responsivas com HTML, CSS, JavaScript, jQuery e AJAX, garantindo usabilidade e performance.',
        'Integrei APIs e implementei regras de negócio complexas, incluindo a estruturação de bancos de dados MySQL.',
        'Utilizei o Composer para gerenciamento de dependências e organização modular do backend.',
        'Utilizei Git (Bitbucket) para controle de versão e Jira para gestão ágil de tarefas e colaboração em equipe.',
        'Desenvolvi em ambiente Linux utilizando WSL, melhorando a compatibilidade com os servidores de produção.',
        'Adquiri experiência inicial com serviços AWS, explorando possibilidades de escalabilidade em nuvem.',
        'Participei ativamente de reuniões de sprint, revisões e sessões de teste, contribuindo com ideias de melhoria técnica e de UX.',
      ],
    },
  ],
};
