import React from 'react';

import styles from './styles.scss';

export default function ListItem ({children, actions}) {
  return (
    <li className={styles.root}>
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>{actions}</div>
    </li>
  );
};
