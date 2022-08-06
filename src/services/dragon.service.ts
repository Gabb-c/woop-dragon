import { AxiosError, AxiosResponse } from 'axios';
import { Dragon } from '@models/dragon';
import { API_CLIENT } from '@utils/api';

export const getAllDragons = async (): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.get<Dragon>('')
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

export const getDragonById = async (id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.get<Dragon>(`/${id}`)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

export const deleteDragonById = async (id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.delete<Dragon>(`/${id}`)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

export const createDragon = async (dragon: Dragon): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.post<Dragon>('', dragon)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

export const editDragon = async (dragon: Dragon, id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.put<Dragon>(`/${id}`, dragon)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};
