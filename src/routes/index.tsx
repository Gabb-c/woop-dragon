import AuthRoute from './AuthRoute';
import { DragonsForm } from '@pages/DragonsForm';
import { DragonsPage } from '@pages/Dragons';
import { LoginPage } from '@pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '@contexts/AuthContext';

const AppRoutes: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={'/dragons'} />} />
      <Route
        path="/dragons"
        element={
          <AuthRoute>
            <DragonsPage />
          </AuthRoute>
        }
      />
      <Route
        path="/dragons/form/:id"
        element={
          <AuthRoute>
            <DragonsForm />
          </AuthRoute>
        }
      />
      <Route
        path="/dragons/form"
        element={
          <AuthRoute>
            <DragonsForm />
          </AuthRoute>
        }
      />
      <Route path="*" element={<Navigate to={'/dragons'} />} />
    </Routes>
  );
};

export default AppRoutes;
