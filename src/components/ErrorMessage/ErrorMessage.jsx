// src/components/ErrorMessage/ErrorMessage.jsx

import styles from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
    </div>
  );
}
