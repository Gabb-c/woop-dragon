import styles from './styles.module.scss';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
  flavor?: 'delete' | 'save' | 'default';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  flavor,
  loading,
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      className={!flavor || flavor === 'default' ? styles.button : styles[`button-${flavor}`]}
    >
      {!loading ? label : 'loading...'}
    </button>
  );
};
