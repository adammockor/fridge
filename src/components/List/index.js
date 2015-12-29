import React from 'react';

import styles from './styles.scss';

export default function List ({children}) {
  return (
    <ul className={styles.root}>{children}</ul>
  );
};
