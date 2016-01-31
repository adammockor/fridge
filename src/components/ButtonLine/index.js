import React from 'react';

import styles from './styles.scss';

export default function Button ({children}) {
  return (
    <div className={styles.root}>{children}</div>
  );
};
