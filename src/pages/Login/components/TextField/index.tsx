import styles from './styles.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  errorText,
  error,
  ...props
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={error ? styles.inputErrorLabel : styles.inputLabel}>{label}</span>
      <input {...props} className={error ? styles.inputError : styles.input} />
      {error && <span className={styles.inputErrorText}>{errorText}</span>}
    </div>
  );
};
