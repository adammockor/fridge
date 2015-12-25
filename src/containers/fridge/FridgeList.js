import React from 'react';
import { connect } from 'react-redux';

import List from 'components/List';

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
