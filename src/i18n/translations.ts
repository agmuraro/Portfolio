import type { Locale } from './types';

interface UiStrings {
  nav: {
    about: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
    contact: string;
  };
  navbar: {
    openMenu: string;
    closeMenu: string;
    languageToggleAria: string;
  };
  hero: {
    greeting: string;
    scrollAria: string;
  };
  sections: {
    about: { title: string };
    experience: { title: string; description: string };
    education: {
      title: string;
      description: string;
      languagesHeading: string;
    };
    projects: { title: string; description: string };
    skills: { title: string; description: string };
    contact: { title: string; description: string };
  };
  footer: { backToTop: string };
}

export const uiStrings: Record<Locale, UiStrings> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    navbar: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageToggleAria: 'Switch language to Portuguese',
    },
    hero: {
      greeting: "Hi, I'm",
      scrollAria: 'Scroll to About section',
    },
    sections: {
      about: { title: 'About' },
      experience: {
        title: 'Experience',
        description:
          "Throughout my journey, I've gained valuable hands-on experience in both frontend and backend development. Each opportunity has strengthened my technical expertise, collaboration skills, and ability to deliver efficient, user-focused solutions.",
      },
      education: {
        title: 'Education and Languages',
        description:
          "Throughout my academic path, I've deepened my understanding of software engineering principles while continuously improving my technical and analytical skills. My education has also strengthened my adaptability, teamwork, and commitment to lifelong learning.",
        languagesHeading: 'Languages',
      },
      projects: {
        title: 'Projects',
        description: 'Below are some of the projects I have developed.',
      },
      skills: {
        title: 'Skills',
        description:
          "Over time, I've cultivated a strong understanding across multiple layers of development — from frameworks and databases to cloud services and agile workflows. Here are the areas where I hold the highest proficiency:",
      },
      contact: {
        title: 'Contact',
        description:
          'Feel free to reach out for collaboration, opportunities, or just a friendly chat!',
      },
    },
    footer: { backToTop: 'Back to top' },
  },
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      education: 'Formação',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    navbar: {
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      languageToggleAria: 'Mudar idioma para inglês',
    },
    hero: {
      greeting: 'Olá, eu sou',
      scrollAria: 'Rolar até a seção Sobre',
    },
    sections: {
      about: { title: 'Sobre' },
      experience: {
        title: 'Experiência',
        description:
          'Ao longo da minha jornada, adquiri experiência prática valiosa tanto em desenvolvimento frontend quanto backend. Cada oportunidade fortaleceu minha expertise técnica, minhas habilidades de colaboração e minha capacidade de entregar soluções eficientes e focadas no usuário.',
      },
      education: {
        title: 'Formação e Idiomas',
        description:
          'Ao longo da minha trajetória acadêmica, aprofundei meu entendimento dos princípios de engenharia de software enquanto aprimorava continuamente minhas habilidades técnicas e analíticas. Minha formação também fortaleceu minha adaptabilidade, trabalho em equipe e compromisso com o aprendizado contínuo.',
        languagesHeading: 'Idiomas',
      },
      projects: {
        title: 'Projetos',
        description: 'Abaixo estão alguns dos projetos que desenvolvi.',
      },
      skills: {
        title: 'Habilidades',
        description:
          'Com o tempo, cultivei um forte entendimento em múltiplas camadas do desenvolvimento — de frameworks e bancos de dados a serviços em nuvem e fluxos de trabalho ágeis. Aqui estão as áreas onde tenho maior proficiência:',
      },
      contact: {
        title: 'Contato',
        description:
          'Sinta-se à vontade para entrar em contato para colaborações, oportunidades ou só para bater um papo!',
      },
    },
    footer: { backToTop: 'Voltar ao topo' },
  },
};
