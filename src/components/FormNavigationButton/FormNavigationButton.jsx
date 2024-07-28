import React from 'react';
import styles from './form-navigation-btn.module.css';

const FormNavigationButton = ({ showBack, showNext }) => {
  return (
    <div className={styles.buttonRow}>
      {showBack && (
        <div className={styles.buttonBack}>
          <div className={styles.iconCircle}>←</div>
          <span className={styles.buttonText}>Back</span>
        </div>
      )}
      {showNext && (
        <div className={styles.buttonNext}>
          <span className={styles.buttonText}>Next</span>
          <div className={styles.iconCircle}>→</div>
        </div>
      )}
    </div>
  );
};

export default FormNavigationButton;
