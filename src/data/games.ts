export type GameStatus = "in-development" | "released";

export const statusLabel: Record<GameStatus, string> = {
  "in-development": "In Development",
  released: "Released",
};

export type GameDetail = {
  id: number;
  title: string;
  status: GameStatus;
  tagline: string;
  blurb: string;
  summary: string;
  meta: { label: string; value: string }[];
  image?: string;
  link?: string;
};

export const games: GameDetail[] = [
  {
    id: 1,
    title: "TrashCollector",
    status: "released",
    tagline: "Educational Game",
    blurb: "An educational game about maintaining cleanliness.",
    summary:
      "An educational game about maintaining cleanliness where players can pick up trash and deposit it into a bin. Each piece of trash is then converted into a coin.",
    meta: [
      { label: "Engine", value: "Java" },
      { label: "Platform", value: "Windows 10/11" },
      { label: "Release", value: "To be announced" },
    ],
    image: "/games/trash-collector.png",
    link: "https://trashcollector.vercel.app/",
  },
  {
    id: 2,
    title: "TwinParkour",
    status: "in-development",
    tagline: "Puzzle Game",
    blurb: "A puzzle game featuring challenging stages at every level.",
    summary:
      "A game that hones puzzle-solving skills, featuring two characters controlled by a single player. In each stage, the two characters must work together to solve puzzles.",
    meta: [
      { label: "Engine", value: "Unity" },
      { label: "Platform", value: "Windows 10/11" },
      { label: "Release", value: "To be announced" },
    ],
    image: "/games/twin-parkour.png",
  },
  {
    id: 2,
    title: "Super Pixel Bros",
    status: "in-development",
    tagline: "2D Side-scrolling Platformer",
    blurb: "Platformer.",
    summary:
      "Players must traverse platforms by jumping over obstacles, defeating enemies, and more.",
    meta: [
      { label: "Engine", value: "Godot" },
      { label: "Platform", value: "Windows 10/11, Linux, MacOS, Android" },
      { label: "Release", value: "To be announced" },
    ],
    image: "/games/super-pixel-bros.png",
    link: "https://superpixelbros.vercel.app/",
  },
];
