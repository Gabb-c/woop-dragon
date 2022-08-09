import AuthService from '../../services/auth';

describe('Auth Service', () => {
  it('should signIn', async () => {
    const response = await AuthService.signIn('woop@sicredi.com.br', 'SuperSecretPassword');
    const expected = {
      access_token: 'qwesadfqwesadfweqasdfwqef',
      user: {
        email: 'woop@sicredi.com',
        name: 'Woop Sicredi',
      },
    };
    expect(response).toEqual(expected);
  });

  it('should return an error', async () => {
    const response = await AuthService.signIn('woop@sicredi.com.b', 'SuperSecretPassword').catch(
      (error) => error as Error
    );

    expect(response.message as string).toBe('Wrong credentials');
  });
});
