import { AuthProvider } from '@contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import './scss/base.scss';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
