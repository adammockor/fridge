import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './styles.scss';
import transition from './modalTransition.scss';

import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: null,
    position: null,
    top: null,
    left: null,
    right: null,
    bottom: null
  },
  content: {
    top: null,
    left: null,
    right: null,
    bottom: null,
    border: null,
    background: null,
    borderRadius: null,
    padding: null,
    position: null,
    overflow: null,
    outline: null,
    WebkitOverflowScrolling: null
  }
};

export default function Modal ({children, isOpen, onRequestClose}) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      overlayClassName={styles.overlay}
      onRequestClose={onRequestClose}
    >
      <CSSTransitionGroup
      transitionAppear
      transitionAppearTimeout={200}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
      transitionName={transition}>
      <div className={styles.modal}>
        {children}
      </div>
      </CSSTransitionGroup>
    </ReactModal>
  );
};
