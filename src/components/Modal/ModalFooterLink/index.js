import React from 'react';

import styles from './styles.scss';

export default function ModalFooterLink ({children, onClick, align}) {
  console.log(align);
  return (
    <a className={ align === 'left' ? styles.alignLeft : styles.alignRight} onClick={onClick}>
      {children}
    </a>
  );
};
