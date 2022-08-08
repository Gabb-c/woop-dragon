import { AxiosError, AxiosResponse } from 'axios';
import { Dragon } from '@models/dragon';
import { API_CLIENT } from '@utils/api';

/**
 *
 * @returns
 */
export const getAllDragons = async (): Promise<Dragon[]> => {
  return new Promise<Dragon[]>((resolve, reject) => {
    API_CLIENT.get<Dragon[]>('')
      .then((response: AxiosResponse<Dragon[]>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 *
 * @param id
 * @returns
 */
export const getDragonById = async (id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.get<Dragon>(`/${id}`)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 *
 * @param id
 * @returns
 */
export const deleteDragonById = async (id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.delete<Dragon>(`/${id}`)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 *
 * @param dragon
 * @returns
 */
export const createDragon = async (dragon: Dragon): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.post<Dragon>('', dragon)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 *
 * @param dragon
 * @param id
 * @returns
 */
export const editDragon = async (dragon: Dragon, id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.put<Dragon>(`/${id}`, dragon)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};
