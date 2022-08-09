import { AxiosError, AxiosResponse } from 'axios';
import { Dragon } from '@models/dragon';
import { API_CLIENT } from '@utils/api';

/**
 * ## Get All Dragons
 * @returns an array of dragons
 */
export const getAllDragons = async (): Promise<Dragon[]> => {
  return new Promise<Dragon[]>((resolve, reject) => {
    API_CLIENT.get<Dragon[]>('')
      .then((response: AxiosResponse<Dragon[]>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 * ## Get Dragon By Id
 * @param id - The dragon id
 * @returns a dragon
 */
export const getDragonById = async (id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.get<Dragon>(`/${id}`)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 * ## Delete Dragon By Id
 * @param id - The dragon id
 * @returns the deleted dragon
 */
export const deleteDragonById = async (id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.delete<Dragon>(`/${id}`)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 * ## Create Dragon
 * @param dragon - The dragon
 * @returns - The created dragon
 */
export const createDragon = async (dragon: Dragon): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.post<Dragon>('', dragon)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};

/**
 * ## Edit Dragon
 * @param dragon - The dragon
 * @param id - The dragon id
 * @returns - The edited dragon
 */
export const editDragon = async (dragon: Dragon, id: string): Promise<Dragon> => {
  return new Promise<Dragon>((resolve, reject) => {
    API_CLIENT.put<Dragon>(`/${id}`, dragon)
      .then((response: AxiosResponse<Dragon>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  });
};
