import { LoginResponse } from '@models/auth';

/**
 *
 * @returns
 */
export const signIn = async (username: string, password: string): Promise<LoginResponse> => {
  return new Promise<LoginResponse>((resolve, reject) => {
    setTimeout(() => {
      if (username === 'woop@sicredi.com.br' && password === 'SuperSecretPassword') {
        console.log(username);
        const response: LoginResponse = {
          access_token: 'qwesadfqwesadfweqasdfwqef',
          user: {
            email: 'woop@sicredi.com',
            name: 'Woop Sicredi',
          },
        };
        resolve(response);
      } else {
        reject(new Error('Wrong credentials'));
      }
    }, 2000);
  });
};
