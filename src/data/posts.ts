import { profile } from "console";

interface User {
  id: number;
  username: string;
  profilePic: string;
}

interface Post {
  id: number;
  author: User;
  // date: Date;
  title: string;
  content: string;
  comments: number;
}

export const users = [
  {
    id: 1,
    username: "Fábio",
    profilePic: "",
  },
  {
    id: 2,
    username: "Leonardo",
    profilePic: "",
  },
];

export const posts = [
  {
    id: 1,
    author: users.at(0),
    // date: Date.parse("12/02/2002"),
    title: "Primeiro post aeeee",
    content:
      "Primeiro post de teste para conferir se deu certo a implementação de posts baseado no array em data/posts.ts ,lorem ipsum dolor sit amet aasddsadsadsadsasad ",
    coments: 300,
    likes: 10992,
  },
  {
    id: 2,
    author: users.at(0),
    // date: Date.parse("12/02/2002"),
    title: "Segundo post",
    content:
      "Segundo post para testar se a funcionalidade de colocar mais posts baseado no array de posts está funcionando",
    coments: 4,
    likes: 18000,
  },
  {
    id: 3,
    author: users.at(1),
    // date: Date.parse("12/02/2002"),
    title: "Terceiro post",
    content:
      "Terceiro post para testar se a funcionalidade de colocar mais posts baseado no array de posts está funcionando",
    coments: 3,
    likes: 1800,
  },
  {
    id: 4,
    author: users.at(1),
    // date: Date.parse("12/02/2002"),
    title: "Quarto post",
    content:
      "Quarto post para testar se a funcionalidade de colocar mais posts baseado no array de posts está funcionando",
    coments: 113,
    likes: 19000,
  },
];
