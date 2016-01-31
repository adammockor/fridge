import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.scss';

let cx = classNames.bind(styles);

export default function Button ({
  children,
  type = 'primary',
  size = 'm',
  disabled = false,
  ...props,
}) {
  let className = cx({
    root: true,
    [type]: type,
    [size]: size,
    disabled,
  });
  return (
    <a className={className} {...props}>{children}</a>
  );
};
