import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/Login';
import { DragonsPage } from '../pages/Dragons';
import AuthRoute from './AuthRoute';

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/dragons'} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dragons"
        element={
          <AuthRoute>
            <DragonsPage />
          </AuthRoute>
        }
      />
      <Route
        path="/dragons/:id"
        element={
          <AuthRoute>
            <DragonsPage />
          </AuthRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
