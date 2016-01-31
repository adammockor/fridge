import React from 'react';
import { connect } from 'react-redux';

import FridgeList from 'containers/fridge/FridgeList';

const mapStateToProps = (state) => ({
  fridgeItems: state.fridgeItems,
});

export class HomeView extends React.Component {
  render () {
    return (
      <FridgeList />
    );
  }
}

export default connect(mapStateToProps, null)(HomeView);
