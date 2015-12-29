import React from 'react';
import { connect } from 'react-redux';

import List from 'components/List/';
import ListHeader from 'components/List/ListHeader/';

import FridgeItem from './FridgeItem';

const mapStateToProps = (state) => {
  return {
    fridgeItems: state.fridgeItems
  };
};

const FridgeList = ({
    fridgeItems
  }
) => {
  return (
    <List>
      <ListHeader>Fridge</ListHeader>
      {fridgeItems.map(item =>
        <FridgeItem
          key={ item.id }
          {...item}
        >
        {item.text}
        </FridgeItem>
      )}
    </List>
  );
};

export default connect(mapStateToProps, null)(FridgeList);
