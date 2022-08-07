import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute: React.FC<{ children?: ReactNode }> = ({ children }): JSX.Element => {
  const token = localStorage.getItem('@Auth:token');

  return token ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/login" replace />;
    </>
  );
};

export default AuthRoute;
