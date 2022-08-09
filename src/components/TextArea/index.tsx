import styles from './styles.module.scss';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  errorText,
  ...props
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={error ? styles.inputErrorLabel : styles.inputLabel}>{label}</span>
      <textarea {...props} data-testid="textarea-test" className={styles.input} />
      {error && <span className={styles.inputErrorText}>{errorText}</span>}
    </div>
  );
};
