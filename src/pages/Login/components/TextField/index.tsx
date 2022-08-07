import styles from './styles.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ label, ...props }): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.inputLabel}>{label}</span>
      <input {...props} className={styles.input} />
    </div>
  );
};
