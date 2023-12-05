// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import mockNeighbours from "./mockNeighbours";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/neighbours`, () => HttpResponse.json(mockNeighbours)),

  http.delete(`${urlApi}/neighbours/:_id`, () => HttpResponse.json({})),
];

export const errorHandlers = [
  http.get(`${urlApi}/neighbours`, () => HttpResponse.error()),
  http.delete(`${urlApi}/neighbours/:_id`, () => HttpResponse.error()),
];
