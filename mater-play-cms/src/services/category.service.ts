import { API } from "../@libs/axios"
import { ICategory } from "../@libs/types";

const _ENDPOINT = '/categories';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: ICategory) => (API.post(_ENDPOINT, data));
const update = (id: number, data: ICategory) => (API.put(`${_ENDPOINT}/${id}`, data));


export const CategoryService = {
  getAll,
  getById,
  create,
  update,
  remove,
}