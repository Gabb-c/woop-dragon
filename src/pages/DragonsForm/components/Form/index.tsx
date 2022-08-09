import DragonService from '@services/dragon';
import styles from './styles.module.scss';
import { Button } from '@components/Button';
import { Dragon } from '@models/dragon';
import { PropagateLoader } from 'react-spinners';
import { TextArea } from '@components/TextArea';
import { TextField } from '@components/TextField';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Form: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [dragon, setDragon] = useState<Dragon>({} as Dragon);
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const handleLoadDragon = async () => {
    if (!id) return;
    setLoading(true);
    await DragonService.getDragonById(id)
      .then((response) => {
        setDragon(response);
        return setLoading(false);
      })
      .catch(() => navigate('/dragons'));
  };

  const handleSubmit = () => {
    setLoadingButton(true);
    if (!id) {
      DragonService.createDragon(dragon)
        .then(() => navigate('/dragons'))
        .catch((_error) => console.error(_error));
    } else {
      DragonService.editDragon(dragon, dragon.id)
        .then(() => navigate('/dragons'))
        .catch((_error) => console.error(_error));
    }
  };

  useEffect(() => {
    handleLoadDragon().catch((_error) => console.error(_error));
  }, []);

  const { name, histories, type } = dragon;

  return (
    <div className={styles.card}>
      <h2>{id ? `Edit Dragon #${id}` : 'Add new Dragon'}</h2>
      <div className={styles.fields}>
        {loading ? (
          <PropagateLoader color="white" />
        ) : (
          <>
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={({ target: { value } }) => {
                setDragon({ ...dragon, name: value });
              }}
            />
            <TextField
              label="Type"
              name="type"
              value={type}
              onChange={({ target: { value } }) => {
                setDragon({ ...dragon, type: value });
              }}
            />
            <TextArea
              label="Histories"
              name="histories"
              value={histories}
              maxLength={200}
              rows={3}
              onChange={({ target: { value } }) => {
                setDragon({ ...dragon, histories: value });
              }}
            />
            <Button
              label="Save"
              name="save-dragon"
              flavor="save"
              loading={loadingButton}
              disabled={loading}
              onClick={handleSubmit}
            />
            <Button
              label="Cancel"
              name="cancel"
              type="submit"
              flavor="delete"
              onClick={() => navigate('/dragons')}
            />
          </>
        )}
      </div>
    </div>
  );
};
