// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import mockNeighbours from "./mockNeighbours";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/neighbours`, () => {
    return HttpResponse.json(mockNeighbours);
  }),

  http.delete(`${urlApi}/neighbours/6563639cc4ddfcae99eeb07a`, () =>
    HttpResponse.json({}),
  ),
];
