import DragonService from '@services/dragon';
import styles from './styles.module.scss';
import { DashboardHeader } from '../DashboardTitle';
import { Dragon } from '@models/dragon';
import { DragonCard } from '../DragonCard';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@components/TextField';

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
        <>
          <svg width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <rect x="17.5" y="30" width="15" height="40" fill="#646cff">
              <animate
                attributeName="y"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="18;30;30"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.2s"
              ></animate>
              <animate
                attributeName="height"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="64;40;40"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.2s"
              ></animate>
            </rect>
            <rect x="42.5" y="30" width="15" height="40" fill="#646cff">
              <animate
                attributeName="y"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="20.999999999999996;30;30"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.1s"
              ></animate>
              <animate
                attributeName="height"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="58.00000000000001;40;40"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.1s"
              ></animate>
            </rect>
            <rect x="67.5" y="30" width="15" height="40" fill="#646cff">
              <animate
                attributeName="y"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="20.999999999999996;30;30"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              ></animate>
              <animate
                attributeName="height"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="58.00000000000001;40;40"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              ></animate>
            </rect>
          </svg>
        </>
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
