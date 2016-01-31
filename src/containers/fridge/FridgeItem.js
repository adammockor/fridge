import React from 'react';
import { connect } from 'react-redux';

import ListItem from 'components/List/ListItem/';

const mapStateToProps = (state) => {
  return {};
};

const FridgeItem = ({children, ...props}) => {
  return (
    <ListItem {...props}>{children}</ListItem>
  );
};

export default connect(mapStateToProps, null)(FridgeItem);
