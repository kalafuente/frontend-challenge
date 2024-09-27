import React from 'react';
import styles from './SpinnerOverlay.module.scss';

const SpinnerOverlay = () => {
  return (
    <div className={styles.overlay} data-testid="spinner">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default SpinnerOverlay;