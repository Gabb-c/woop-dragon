import styles from './styles.module.scss';
import { Button } from '@components/Button';
import { Dragon } from '@models/dragon';
import { format } from 'date-fns';

interface DragonCardProps {
  dragon: Dragon;
  onDelete: (id: string) => void;
  onEdit: () => void;
}

export const DragonCard: React.FC<DragonCardProps> = ({
  dragon,
  onEdit,
  onDelete,
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <h5 className={styles.dragonType}>{dragon.type.toUpperCase()}</h5>
      <h1 className={styles.dragonName}>{dragon.name}</h1>
      <h3 className={styles.dragonBirth}>{format(new Date(dragon.createdAt), 'MM/dd/yyyy')}</h3>
      <div className={styles.fields}>
        <Button label="Edit" name="edit-dragon" onClick={onEdit} />
        <Button
          label="Delete"
          name="delete-dragon"
          flavor="delete"
          onClick={() => onDelete(dragon.id)}
        />
      </div>
    </div>
  );
};
