import React from 'react'
import PropTypes from 'prop-types';

// External libs
import {
  Form,
  Button,
} from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";

const FormBalance = (props) => {
  const { onGetBalance, loading } = props

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async(formData) => {
      const { amount } = formData;
      await onGetBalance(amount)
    }
  });

  return (
    <Form
      size='large'
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        fluid
        icon='money'
        iconPosition='left'
        placeholder='Monto en dólares'
        name="amount"
        value={ formik.values.amount }
        onChange={ formik.handleChange }
        error={ formik.errors.amount }
      />

      <Button
        type="submit"
        fluid
        size='large'
        primary
        loading={loading}
        disabled={!!(formik.errors.amount || loading)}
      >
        Consultar
      </Button>
    </Form>
  )
}

function initialValues() {
  return {
    amount: ""
  }
}

function validationSchema() {
  return {
    amount: Yup.number(true).required(true),
  }
}

FormBalance.propTypes = {
  /**
   * Consulta el balance
   */
  onGetBalance: PropTypes.func.isRequired,
  /**
   * Consultando balance
   */
  loading: PropTypes.bool.isRequired,
};

FormBalance.defaultProps = {
  onGetBalance: undefined,
  loading: false
};

export default FormBalance