import { User } from '@models/auth';
import AuthService from '@services/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuthContext {
  user: User | null;
  signed: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storageUser = localStorage.getItem('@Auth:user');
    const storageToken = localStorage.getItem('@Auth:token');

    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser) as User);
    }
  }, []);

  const signIn = async (username: string, password: string) => {
    await AuthService.signIn(username, password)
      .then((response) => {
        console.log(response);

        localStorage.setItem('@Auth:user', JSON.stringify(response.user));
        localStorage.setItem('@Auth:token', response.access_token);

        return setUser(response.user);
      })
      .catch((error) => {
        throw new Error(error as string);
      });
  };

  const signOut = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
