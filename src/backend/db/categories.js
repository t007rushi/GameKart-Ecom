import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "games",
    description:
      "Video games are defined based on their platform, which include arcade video games, console games, and personal computer (PC) games",
  },
  {
    _id: uuid(),
    categoryName: "console",
    description:
      "A video game console is an electronic device that outputs a video signal or image to display a video game that can be played with a game controller.",
  },
  {
    _id: uuid(),
    categoryName: "accesories",
    description:
      "A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience.",
  },
];
