import { useAuth } from '@contexts/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { TextField } from '../TextField';
import styles from './styles.module.scss';

export const LoginForm: React.FC = (): JSX.Element => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signIn(username, password)
      .then(() => navigate('/dragons'))
      .catch((error_) => {
        setError(true);
        setLoading(false);
        console.error(error_);
      });
  };

  return (
    <div className={styles.card}>
      <h2>Welcome back!</h2>
      <div className={styles.fields}>
        <TextField
          label="Username"
          error={error}
          errorText="Invalid username"
          value={username}
          onChange={(e) => {
            if (error) setError(false);
            setUsername(e.target.value);
          }}
        />
        <TextField
          label="Password"
          error={error}
          errorText="Invalid password"
          value={password}
          type="password"
          onChange={(e) => {
            if (error) setError(false);
            setPassword(e.target.value);
          }}
        />
        <Button label="Login" loading={loading} disabled={loading} onClick={() => handleLogin()} />
      </div>
    </div>
  );
};
