import DragonService from '@services/dragon';
import styles from './styles.module.scss';
import { DashboardHeader } from '../DashboardTitle';
import { Dragon } from '@models/dragon';
import { DragonCard } from '../DragonCard';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@components/TextField';
import { Loading } from '@components/Loading';

export const DragonList: React.FC = (): JSX.Element => {
  const [list, setList] = useState<Dragon[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();

  const filtered = useMemo(
    () => list.filter((d) => d.name.toLowerCase().includes(filter.toLowerCase())),
    [filter]
  );

  const loadDragons = async () => {
    setLoading(true);
    await DragonService.getAllDragons()
      .then((response) => {
        const sorted = [...response].sort((a, b) =>
          a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
        );
        setList(sorted);
        return setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id: string) => {
    DragonService.deleteDragonById(id)
      .then(() => {
        return loadDragons();
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id: string) => {
    setLoading(true);
    navigate(`/dragons/form/${id}`);
  };

  useEffect(() => {
    loadDragons().catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <DashboardHeader />
      <TextField
        placeholder="Search..."
        value={filter}
        onChange={({ target: { value } }) => setFilter(value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.lisCtontainer}>
          {filtered.length > 0
            ? filtered.map((d, i) => (
                <DragonCard
                  onDelete={handleDelete}
                  onEdit={() => handleEdit(d.id)}
                  dragon={d}
                  key={i}
                />
              ))
            : list.map((d, i) => (
                <DragonCard
                  onDelete={handleDelete}
                  onEdit={() => handleEdit(d.id)}
                  dragon={d}
                  key={i}
                />
              ))}
        </div>
      )}
    </div>
  );
};
