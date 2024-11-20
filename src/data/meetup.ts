interface Authors {
  nome: string;
  desc: string;
}
export interface CardMeetup {
  title: string;
  banner: string;
  description: string;
  likes: number;
  comments: number;
  data: string;
  hora: string;
  tags: string[];
  palestrantes: Authors[];
}
export const meetup = [
  {
    title: "Construindo uma aplicação Liferay na prática",
    banner: "https://img.youtube.com/vi/nM9xs4RuVbY/mqdefault.jpg",
    description: "Sem descrição",
    likes: 0,
    comments: 0,
    data: "21/05",
    hora: "18:30",
    tags: ["Low code", "Inovação", "DXP"],
    palestrantes: [
      {
        nome: "José Abelenda",
        desc: "Team Lead Liferay",
      },
    ],
  },

  {
    title: "Título do meetup",
    banner: "https://img.youtube.com/vi/-YZJR6zoDbc/mqdefault.jpg",
    description: "uma descrição",
    likes: 0,
    comments: 0,
    data: "dd/mm/aaaa",
    hora: "hh/mm",
    tags: [],
    palestrantes: [
      {
        nome: "",
        desc: "",
      },
    ],
  },

  {
    title: "",
    banner: "https://img.youtube.com/vi/-YZJR6zoDbc/mqdefault.jpg",
    description: "",
    likes: 0,
    comments: 0,
    data: "dd/mm/aaaa",
    hora: "hh/mm",
    tags: [],
    palestrantes: [
      {
        nome: "",
        desc: "",
      },
    ],
  },
  {
    title: "",
    banner: "https://img.youtube.com/vi/-YZJR6zoDbc/mqdefault.jpg",
    description: "",
    likes: 0,
    comments: 0,
    data: "dd/mm/aaaa",
    hora: "hh/mm",
    tags: [""],
    palestrantes: [
      {
        nome: "",
        desc: "",
      },
    ],
  },

  {
    title: "",
    banner: "https://img.youtube.com/vi/-YZJR6zoDbc/mqdefault.jpg",
    description: "",
    likes: 0,
    comments: 0,
    data: "dd/mm/aaaa",
    hora: "hh/mm",
    tags: [""],
    palestrantes: [
      {
        nome: "",
        desc: "",
      },
    ],
  },

  {
    title: "",
    banner: "https://img.youtube.com/vi/-YZJR6zoDbc/mqdefault.jpg",
    description: "",
    likes: 0,
    comments: 0,
    data: "dd/mm/aaaa",
    hora: "hh/mm",
    tags: [""],
    palestrantes: [
      {
        nome: "",
        desc: "",
      },
    ],
  },
];
