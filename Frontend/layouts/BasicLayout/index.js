import React from "react";

// Components
// import Header from "../../components/Header";

// External libs
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

export default function BasicLayout( props ) {
  const { children } = props;
  return (
    <div>
      <Menu
        fixed='top'
        className="basic-layout__menu"
      >
        <Container
        >
          <Menu.Item
            as='a'
            header
          >
            <Image size='mini' src='https://disruptivestudio.com/images/body/logo.svg' style={{ width: '50%' }} />
          </Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
        {children}
      </Container>
    </div>
  )
}
