/**
 * Single source of truth for the game catalogue.
 * Add, edit, or remove entries here — the Games section and detail modal
 * both read from this file.
 */

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
  /** Short text shown on the card. */
  blurb: string;
  /** Longer text shown inside the detail modal. */
  summary: string;
  meta: { label: string; value: string }[];
  /**
   * Optional cover photo/screenshot for this project.
   * Used on both the card thumbnail and the detail modal header.
   *
   * How to add one:
   * 1. Drop the image file into the `public/games/` folder
   *    (create the folder if it doesn't exist yet), e.g. `public/games/project-01.jpg`.
   * 2. Reference it here starting with a slash: "/games/project-01.jpg".
   * Leave this field out (or undefined) to keep showing the default placeholder.
   */
  image?: string;
  /**
   * Optional URL to visit the project (store page, itch.io, GitHub repo, playable demo, etc).
   * When set, a "Visit Project" link/button appears on the card and inside the detail modal.
   * Leave this field out (or undefined) while the project has nowhere to link to yet.
   */
  link?: string;
};

export const games: GameDetail[] = [
  {
    id: 1,
    title: "TrashCollector",
    status: "in-development",
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
    //link: "https://example.com/untitled-project-01",
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
];
