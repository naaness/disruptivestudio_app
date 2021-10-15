import React from "react";
import PropTypes from 'prop-types';

// Components
import Header from "../../components/Header";

// External libs
import {
  Container,
} from 'semantic-ui-react'

const BasicLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />

      <Container text style={{ marginTop: '7em' }}>
        {children}
      </Container>
    </div>
  )
}

BasicLayout.propTypes = {
  /**
   * Pagina a visualizar
   */
  children: PropTypes.any,
};

BasicLayout.defaultProps = {
  children: undefined,
};

export default BasicLayout