import React, { Component } from 'react';
import * as API from '../services/mockApi';
import { FormUser } from './FormUser/FormUser';
import { UserList } from './UserList/UserList';

export class App extends Component {
  state = {
    users: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const users = await API.getUsers();
      this.setState({ users });
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  addUser = async value => {
    if (value.name === '' || value.phone === '') {
      return alert('Error');
    }
    try {
      this.setState({ isLoading: true });
      const user = await API.addUser(value);
      this.setState(prevState => ({ users: [...prevState.users, user] }));
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handledeleteUser = async id => {
    try {
      this.setState({ isLoading: true });
      await API.deleteUser(id);
      this.setState(prevState => ({
        users: prevState.users.filter(user => user.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = (values, { resetForm }) => {
    this.addUser(values);
    resetForm();
  };

  handleEditUser = async userUp => {
    try {
      this.setState({ isLoading: true });
      const updateUser = await API.updateUser(userUp);
      this.setState(state => ({
        users: state.users.map(user =>
          user.id === updateUser.id ? updateUser : user
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { users, error, isLoading } = this.state;
    return (
      <>
        <FormUser
          onSubmit={this.addUser}
          initialValues={{ name: '', phone: '' }}
        />
        {isLoading && <p>Loading...</p>}
        {users.length > 0 && !isLoading && (
          <UserList
            items={users}
            onDelete={this.handledeleteUser}
            onEdit={this.handleEditUser}
          ></UserList>
        )}
        {error && <p>Opssss... Error</p>}
      </>
    );
  }
}
