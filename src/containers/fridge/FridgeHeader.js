import React from 'react';
import { connect } from 'react-redux';

import ListHeader from 'components/List/ListHeader/';

import { toggleModifyFridgeItemModal } from 'actions/fridge/';

const mapDispatchToProps = (dispatch) => {
  return {
    actionOnClick: () => dispatch(toggleModifyFridgeItemModal()),
  };
};

const mapStateToProps = (state) => {
  return {};
};

const FridgeHeader = ({actionOnClick}) => {
  return (
    <ListHeader action actionOnClick={actionOnClick}>Fridge</ListHeader>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeHeader);
