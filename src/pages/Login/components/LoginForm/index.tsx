import styles from './styles.module.scss';
import { Button } from '@components/Button';
import { TextField } from '@components/TextField';
import { useAuth } from '@contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
          name="username"
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
          name="password"
          error={error}
          errorText="Invalid password"
          value={password}
          type="password"
          onChange={(e) => {
            if (error) setError(false);
            setPassword(e.target.value);
          }}
        />
        <Button
          label="Login"
          name="login"
          loading={loading}
          type="submit"
          disabled={loading}
          onClick={() => handleLogin()}
        />
      </div>
    </div>
  );
};
