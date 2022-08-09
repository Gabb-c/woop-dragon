import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute: React.FC<{ children?: ReactNode }> = ({ children }): JSX.Element => {
  const user = localStorage.getItem('@Auth:user');

  return user ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/login" replace />;
    </>
  );
};

export default AuthRoute;
