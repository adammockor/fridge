import React from 'react';

import styles from './styles.scss';

export default function ModalFooter ({children}) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};
