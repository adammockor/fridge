import React from 'react';

import styles from './styles.scss';

export default function Form ({onSubmit, children}) {
  return (
    <form className={styles.root} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
