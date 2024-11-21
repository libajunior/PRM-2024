export interface IVehicleType {
  id?: string;
  name: string;
}
export interface IVehicleFactory {
  id?: string;
  name: string;
}
export interface IVehicleModel {
  id?: string;
  name: string;
  factory: IVehicleFactory;
}
export interface IVehicle {
  id?: string;
  description: string;
  photo: string;
  yearFactory: number;
  yearModel: number;
  priceRent: number;
  type: IVehicleType;
  model: IVehicleModel;
}
export interface IFilter {
  factory?: IVehicleFactory;
  startDate?: Date;
  endDate?: Date;
}