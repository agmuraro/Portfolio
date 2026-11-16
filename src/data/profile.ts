import type { Profile } from '@/types/content';
import type { Locale } from '@/i18n/types';

export const profile: Record<Locale, Profile> = {
  en: {
    name: 'Arthur Muraro',
    role: 'Software Engineer',
    tagline:
      'Backend-leaning software engineer building efficient, scalable solutions.',
    bioParagraphs: [
      "My name is Arthur Muraro, I'm currently 21 years old, and I live in Curitiba, Paraná, Brazil.",
      "I'm a **Backend Developer** with solid experience in **API** and **database** development and maintenance. Currently, I'm expanding my expertise into **Full-Stack Development** by studying **Frontend technologies**, while also strengthening my skills in **cloud computing** and **container orchestration**. I'm seeking a **Junior Developer** opportunity where I can contribute with **efficient** and **scalable** solutions by applying **software development best practices**.",
    ],
  },
  pt: {
    name: 'Arthur Muraro',
    role: 'Engenheiro de Software',
    tagline:
      'Engenheiro de software com foco em backend, construindo soluções eficientes e escaláveis.',
    bioParagraphs: [
      'Meu nome é Arthur Muraro, tenho 21 anos e moro em Curitiba, Paraná, Brasil.',
      'Sou **Desenvolvedor Backend** com sólida experiência no desenvolvimento e manutenção de **APIs** e **bancos de dados**. Atualmente, estou expandindo minha expertise para **Desenvolvimento Full-Stack** estudando **tecnologias de Frontend**, além de fortalecer minhas habilidades em **computação em nuvem** e **orquestração de containers**. Estou buscando uma oportunidade de **Desenvolvedor Júnior** onde eu possa contribuir com soluções **eficientes** e **escaláveis**, aplicando as **melhores práticas de desenvolvimento de software**.',
    ],
  },
};
