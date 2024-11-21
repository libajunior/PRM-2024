import { API } from "../@libs/axios"

const _ENDPOINT = '/vehicle-types';

const getAll = () => (API.get(_ENDPOINT));

export const VehicleTypeService = {
  getAll
}