import { API } from "../@libs/axios"
import { IVehicleModel } from "../@libs/types";

const _ENDPOINT = '/vehicle-models';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IVehicleModel) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IVehicleModel) => (API.put(`${_ENDPOINT}/${id}`, data));


export const VehicleModelService = {
  getAll,
  getById,
  create,
  update,
  remove,
}