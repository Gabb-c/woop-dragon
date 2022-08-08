import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';

import DragonService from '@services/dragon';

import { DragonCard } from '../DragonCard';
import { Dragon } from '@models/dragon';

import styles from './styles.module.scss';
import { DashboardHeader } from '../DashboardTitle';

export const DragonList: React.FC = (): JSX.Element => {
  const [list, setList] = useState<Dragon[]>([]);
  const [loading, setLoading] = useState(true);

  const loadDragons = async () => {
    setLoading(true);
    await DragonService.getAllDragons()
      .then((response) => {
        setList(response);
        return setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id: string) => {
    setLoading(true);
    DragonService.deleteDragonById(id)
      .then(() => {
        return loadDragons();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadDragons().catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <DashboardHeader />
      {loading ? (
        <PropagateLoader color="white" />
      ) : (
        <div className={styles.lisCtontainer}>
          {list.map((d, i) => (
            <DragonCard onDelete={handleDelete} dragon={d} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};
