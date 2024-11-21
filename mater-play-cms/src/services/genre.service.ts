import { API } from "../@libs/axios"
import { IGenre } from "../@libs/types";

const _ENDPOINT = '/genres';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IGenre) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IGenre) => (API.put(`${_ENDPOINT}/${id}`, data));


export const GenreService = {
  getAll,
  getById,
  create,
  update,
  remove,
}