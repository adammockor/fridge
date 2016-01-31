import React from 'react';
import { connect } from 'react-redux';

import List from 'components/List/';
import Button from 'components/Button';
import ButtonLine from 'components/ButtonLine';

import FridgeHeader from './FridgeHeader';
import FridgeItem from './FridgeItem';
import FridgeModifyItem from './FridgeModifyItem';

import { loadAllFridgeItems, deleteFridgeItem, toggleModifyFridgeItemModal } from 'actions/fridge/';

const mapStateToProps = (state) => {
  return {
    items: state.fridge.items,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    onEdit: (item) => {
      console.log(item);
      dispatch(toggleModifyFridgeItemModal(item));
    },
    onRemove: (id) => dispatch(deleteFridgeItem(id)),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// };

class FridgeList extends React.Component {
  static propTypes = {
    items: React.PropTypes.array,
    dispatch: React.PropTypes.func,
    onRemove: React.PropTypes.func,
    onEdit: React.PropTypes.func,
  };

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.dispatch(loadAllFridgeItems());
  }

  render () {
    let { items, onRemove, onEdit } = this.props;
    const actions = (item) => (
      <ButtonLine>
        <Button onClick={() => onEdit(item)}>Edit</Button>
        <Button onClick={() => onRemove(item.id)}>Remove</Button>
      </ButtonLine>
    );

    return (
      <div>
        <List>
          <FridgeHeader />
          {items.map(item =>
            <FridgeItem
              key={ item.id }
              actions={actions(item)}
              {...item}
            >
            {item.product}
            </FridgeItem>
          )}
        </List>
        <FridgeModifyItem />
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FridgeList);
