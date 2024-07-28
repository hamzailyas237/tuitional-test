import React from 'react';
import styles from './stepper.module.css';

const Stepper = ({ pageNo, totalPages, title }) => {
  const renderSteps = () => {
    let steps = [];
    for (let i = 1; i <= totalPages; i++) {
      steps.push(
        <div key={i} className={styles.stepContainer}>
          <div
            className={`${styles.circle} ${i <= pageNo ? styles.active : styles.pending}`}
          >
            {i}
          </div>
          {i < totalPages && <div className={styles.line}></div>}
        </div>
      );
    }
    return steps;
  };

  return (
    <div className={styles.stepperContainer}>
      {renderSteps()}
    </div>
  );
};

export default Stepper;
