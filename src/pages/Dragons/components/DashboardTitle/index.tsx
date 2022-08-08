import { useAuth } from '@contexts/AuthContext';
import { Button } from 'src/pages/Login/components/Button';
import styles from './styles.module.scss';

export const DashboardHeader = () => {
  const { signOut } = useAuth();

  return (
    <div className={styles.container}>
      <Button label="Logout" onClick={() => signOut()} />
      <h1>Dragons Dashboard</h1>
      <Button label="Add" />
    </div>
  );
};
