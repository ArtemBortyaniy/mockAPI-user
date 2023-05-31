import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export class FormUser extends Component {
  render() {
    return (
      <Formik
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
      >
        <Form>
          <label>
            Name:
            <br />
            <Field type="text" name="name"></Field>
          </label>
          <br />
          <label>
            Phone:
            <br />
            <Field type="phone" name="phone"></Field>
          </label>
          <br />
          <button type="submit">Add user</button>
        </Form>
      </Formik>
    );
  }
}
