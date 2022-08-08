import styles from './styles.module.scss';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, loading, ...props }): JSX.Element => {
  return (
    <button {...props} className={styles.button}>
      {!loading ? label : 'loading...'}
    </button>
  );
};
