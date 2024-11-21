import { API } from "../@libs/axios"
import { IVehicleType } from "../@libs/types";

const _ENDPOINT = '/vehicle-types';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IVehicleType) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IVehicleType) => (API.put(`${_ENDPOINT}/${id}`, data));


export const VehicleTypeService = {
  getAll,
  getById,
  create,
  update,
  remove,
}