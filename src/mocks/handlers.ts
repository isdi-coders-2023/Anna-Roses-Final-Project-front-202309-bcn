// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import {
  mockNeighbours,
  mockMartaNeighbour,
  mockAnaNeighbour,
  mockMartaNeighbourModified,
} from "./mockNeighbours";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/neighbours`, () =>
    HttpResponse.json({ neighbours: mockNeighbours }),
  ),
  http.delete(`${urlApi}/neighbours/:_id`, () => HttpResponse.json({})),
  http.post(`${urlApi}/neighbours/create`, () =>
    HttpResponse.json(mockAnaNeighbour),
  ),
  http.get(`${urlApi}/neighbours/:_id`, () =>
    HttpResponse.json(mockMartaNeighbour),
  ),
  http.patch(`${urlApi}/neighbours/:_id`, () =>
    HttpResponse.json({ neighbour: mockMartaNeighbourModified }),
  ),
];

export const errorHandlers = [
  http.get(`${urlApi}/neighbours`, () => HttpResponse.error()),
  http.delete(`${urlApi}/neighbours/:_id`, () => HttpResponse.error()),
  http.post(`${urlApi}/neighbours/create`, () => HttpResponse.error()),
  http.get(`${urlApi}/neighbours/:_id`, () => HttpResponse.error()),
  http.patch(`${urlApi}/neighbours/:_id`, () => HttpResponse.error()),
];
