import React from 'react';

import styles from './styles.scss';

export default function Form ({children}) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};
