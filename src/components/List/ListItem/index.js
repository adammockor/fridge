import React from 'react';

import styles from './styles.scss';

export default function ListItem ({children}) {
  return (
    <li className={styles.root}>{children}</li>
  );
};
