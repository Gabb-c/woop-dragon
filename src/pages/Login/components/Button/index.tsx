import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }): JSX.Element => {
  return (
    <button {...props} className={styles.button}>
      {label}
    </button>
  );
};
