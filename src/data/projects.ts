import type { Project } from '@/types/content';
import type { Locale } from '@/i18n/types';

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      name: 'PentestHub',
      description:
        'A web-based platform for automating penetration testing workflows. PentestHub integrates tools such as **Nmap**, **Nikto**, **Hydra**, and **Metasploit**, providing structured scan execution, log management, and automated PDF report generation. The backend is built with **FastAPI**, focusing on modular architecture, authentication, and scalability.',
      link: {
        label: 'View repository on GitHub',
        url: 'https://github.com/agmuraro/PentestHub',
      },
    },
    {
      name: 'Simple Calculator',
      description:
        'A simple calculator that features **addition**, **subtraction**, **multiplication**, and **division**, built with **React**.',
      link: {
        label: 'View repository on GitHub',
        url: 'https://github.com/agmuraro/Calculator',
      },
    },
    {
      name: 'Notes App',
      description:
        'A simple and responsive **notes application** built with **React**, **TypeScript**, and **Vite**. This app allows users to **create**, **manage**, and **track their notes** with a **clean interface** and **dark mode support**.',
      link: {
        label: 'View live demo',
        url: 'https://notes-arthurmuraro.vercel.app/',
      },
    },
  ],
  pt: [
    {
      name: 'PentestHub',
      description:
        'Uma plataforma web para automatizar fluxos de trabalho de testes de penetração. O PentestHub integra ferramentas como **Nmap**, **Nikto**, **Hydra** e **Metasploit**, oferecendo execução estruturada de scans, gerenciamento de logs e geração automática de relatórios em PDF. O backend é construído com **FastAPI**, com foco em arquitetura modular, autenticação e escalabilidade.',
      link: {
        label: 'Ver repositório no GitHub',
        url: 'https://github.com/agmuraro/PentestHub',
      },
    },
    {
      name: 'Simple Calculator',
      description:
        'Uma calculadora simples com funções de **soma**, **subtração**, **multiplicação** e **divisão**, construída com **React**.',
      link: {
        label: 'Ver repositório no GitHub',
        url: 'https://github.com/agmuraro/Calculator',
      },
    },
    {
      name: 'Notes App',
      description:
        'Um **aplicativo de notas** simples e responsivo, construído com **React**, **TypeScript** e **Vite**. O app permite **criar**, **gerenciar** e **acompanhar notas** com uma **interface limpa** e **suporte a modo escuro**.',
      link: {
        label: 'Ver demonstração ao vivo',
        url: 'https://notes-arthurmuraro.vercel.app/',
      },
    },
  ],
};
