import styles from './styles.module.scss';
import { Button } from '@components/Button';
import { useAuth } from '@contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const DashboardHeader = () => {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Button label="Logout" name="logout" flavor="delete" onClick={() => signOut()} />
      <h1>Dragons Dashboard</h1>
      <Button
        label="Add"
        name="add-dragon"
        flavor="save"
        onClick={() => navigate('/dragons/form')}
      />
    </div>
  );
};
