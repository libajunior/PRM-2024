import { API } from "../@libs/axios"
import { IFilter, IVehicle } from "../@libs/types";

const _ENDPOINT = '/vehicles';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));

//TO-DO: Implementar o filtro
const filter = () => (API.get(_ENDPOINT));

export const VehicleService = {
  getAll,
  getById,
  filter
}