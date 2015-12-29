import React from 'react';

import CircleButton from './../../Button/CircleButton/';

import styles from './styles.scss';

export default function ListHeader ({children, action, actionOnClick}) {
  return (
    <li className={styles.rootWithAction}>
      <h3>{children}</h3>
      {action
        ? <div className={styles.action} onClick={actionOnClick}>
            <CircleButton>+</CircleButton>
          </div>
        : false}
    </li>
  );
};
