import React from 'react';

import styles from './styles.scss';

export default function CircleButton ({children}) {
  return (
    <a className={styles.root}>{children}</a>
  );
};
