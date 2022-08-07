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

  const handleLogin = () => {
    signIn(username, password)
      .then(() => navigate('/dragons'))
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.card}>
      {/* <img alt="Dragon Logo" src="/dragon.png" height={90} width={90} /> */}
      <h2>Welcome back!</h2>
      <div className={styles.fields}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Login" onClick={() => handleLogin()} />
      </div>
    </div>
  );
};
