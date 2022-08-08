import { Dragon } from '@models/dragon';
import { format } from 'date-fns';
import { Button } from 'src/pages/Login/components/Button';
import styles from './styles.module.scss';

interface DragonCardProps {
  dragon: Dragon;
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
}

export const DragonCard: React.FC<DragonCardProps> = ({ dragon, onDelete }): JSX.Element => {
  return (
    <div className={styles.card}>
      <h5 className={styles.dragonType}>{dragon.type.toUpperCase()}</h5>
      <h1 className={styles.dragonName}>{dragon.name}</h1>
      <h3 className={styles.dragonBirth}>{format(new Date(dragon.createdAt), 'MM/dd/yyyy')}</h3>
      <div className={styles.fields}>
        <Button label="Edit" />
        <Button label="Delete" onClick={() => onDelete(dragon.id)} />
      </div>
    </div>
  );
};
