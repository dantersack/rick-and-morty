import { rest } from "msw";

import { BASE_URL } from "../api";

export const handlers = [
  rest.get(`${BASE_URL}/api`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        characters: "https://rickandmortyapi.com/api/characters",
        locations: "https://rickandmortyapi.com/api/location",
        episodes: "https://rickandmortyapi.com/api/episode",
      })
    );
  }),
];
