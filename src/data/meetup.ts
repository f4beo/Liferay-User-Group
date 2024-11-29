interface Speaker {
  nome: string;
  desc: string;
}
export interface CardMeetup {
  id: number | string;
  number: number;
  title: string;
  banner: string;
  description: string;
  likes: number;
  comments: number;
  data: string;
  hora: string;
  tags: string[];
  palestrantes: Speaker[];
}
export const meetup = [
  {
    id: 31,
    title: "Construindo uma aplicação Liferay na prática",
    banner: "https://img.youtube.com/vi/nM9xs4RuVbY/mqdefault.jpg",
    description: "Sem descrição",
    likes: 10,
    comments: 21,
    data: "21/05",
    hora: "18:30",
    tags: ["Low code", "Inovação", "DXP"],
    palestrantes: [
      {
        nome: "José Abelenda",
        desc: "Team Lead Liferay",
      },
      {
        nome: "Fábio Leonardo",
        desc: "Estudante ads",
      },
    ],
  },

  {
    id: 30,
    title: "Título do meetup",
    banner: "https://img.youtube.com/vi/JF1W6fdjvtA/mqdefault.jpg",
    description: "uma descrição",
    likes: 28,
    comments: 3,
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
    id: 30,
    title: "",
    banner: "https://img.youtube.com/vi/iMk732r-5D4/mqdefault.jpg",
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
    id: 30,
    title: "",
    banner: "https://img.youtube.com/vi/GHUc68SYVWQ/mqdefault.jpg",
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
