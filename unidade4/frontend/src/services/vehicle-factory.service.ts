import { API } from "../@libs/axios"
import { IVehicleFactory } from "../@libs/types";

const _ENDPOINT = '/vehicle-factories';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IVehicleFactory) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IVehicleFactory) => (API.put(`${_ENDPOINT}/${id}`, data));


export const VehicleFactoryService = {
  getAll,
  getById,
  create,
  update,
  remove,
}