import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Modal from 'components/Modal/';
import ModalHeader from 'components/Modal/ModalHeader/';
import ModalContent from 'components/Modal/ModalContent/';
import ModalFooter from 'components/Modal/ModalFooter/';
import ModalFooterLink from 'components/Modal/ModalFooterLink/';

import Form from 'components/Form';
import FormRow from 'components/Form/FormRow';
import Input from 'components/Input';

import { createFridgeItem, toggleModifyFridgeItemModal, modifyFridgeItem } from 'actions/fridge/';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRequestClose: () => dispatch(toggleModifyFridgeItemModal()),
    onSubmit: (data) => ownProps.modify ? dispatch(modifyFridgeItem(data)) : dispatch(createFridgeItem(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.fridge.ui.toggleModifyFridge,
    modify: state.fridge.ui.modifyFridgeItem,
  };
};

let FridgeManageItem = ({
  fields: {product, expiration},
  handleSubmit,
  onRequestClose,
  isOpen,
  modify,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit}>
        <ModalHeader>{modify ? 'Edit item' : 'Add new item'}</ModalHeader>
        <ModalContent>
            <FormRow>
              <Input type='text' label='Product' {...product} />
              <Input type='text' label='Expiration Name' {...expiration} />
            </FormRow>
        </ModalContent>
        <ModalFooter>
          <ModalFooterLink onClick={onRequestClose}>Cancel</ModalFooterLink>
          <ModalFooterLink onClick={handleSubmit}>Add</ModalFooterLink>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

FridgeManageItem = reduxForm({
  form: 'fridgeModifyItem',
  fields: ['product', 'expiration', 'id'],
}, null, mapDispatchToProps)(FridgeManageItem);

export default connect(mapStateToProps, mapDispatchToProps)(FridgeManageItem);
