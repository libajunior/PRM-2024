import { API } from "../@libs/axios"

const _ENDPOINT = '/vehicle-models';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));

export const VehicleModelService = {
  getAll,
  getById,
}