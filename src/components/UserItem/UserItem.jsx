import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FormUser } from 'components/FormUser/FormUser';

export class UserItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onEdit(values);
    resetForm();
  };

  render() {
    const { showModal } = this.state;
    const { item, onDelete } = this.props;
    return (
      <>
        <li>
          <div>
            <div>
              <b>name :</b> {item.name}
            </div>
            <div>
              <b>phone :</b> {item.phone}
            </div>
            <button type="button" onClick={() => this.toggleModal()}>
              Edit
            </button>
            <button type="button" onClick={() => onDelete(item.id)}>
              Delete
            </button>
            <br />
            <hr />
          </div>
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <FormUser
              initialValues={{
                name: item.name,
                phone: item.phone,
                id: item.id,
              }}
              onSubmit={this.handleSubmit}
            />
          </Modal>
        )}
      </>
    );
  }
}
