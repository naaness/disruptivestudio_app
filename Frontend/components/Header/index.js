import React from "react";
import PropTypes from 'prop-types';

// External libs
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu
      fixed='top'
      className="basic-layout__menu"
    >
      <Container>
        <Menu.Item
          as='a'
          header
        >
          <Image size='mini' src='https://disruptivestudio.com/images/body/logo.svg' style={{ width: '50%' }} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header