// src/components/FormField/FormField.jsx

import styles from './FormField.module.css';

export function FormField({ label, type, name, value, onChange, error }) {
  return (
    <div className={styles.formField}>
      <label htmlFor={name}>
        {label}
        <input 
          type={type} 
          name={name} 
          id={name}
          value={value} 
          onChange={onChange} 
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </label>
      {error && <p className={styles.error} id={`${name}-error`}>{error}</p>}
    </div>
  );
}
