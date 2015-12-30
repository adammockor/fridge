import React from 'react';

import styles from './styles.scss';

export default function ModalHeader ({children}) {
  return (
    <div className={styles.root}>
      <h3>{children}</h3>
    </div>
  );
};
