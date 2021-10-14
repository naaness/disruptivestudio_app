import React from 'react';

// External libs
import {
  Form,
  Segment,
  Button,
  Header,
  Grid,
  Statistic,
  Placeholder
} from 'semantic-ui-react';

export default function CardCrypto(props) {
  const { loading, name, value } = props
  
  if (loading) {
    return (
      <LoadingCardCrypto />
    )
  }
  return (
    <Statistic>
      {value?
        <Statistic.Value>
          ${value}
        </Statistic.Value>
      :null}
      <Statistic.Label>
        {name}
      </Statistic.Label>
    </Statistic>
  )
}

function LoadingCardCrypto() {
  return (
    <Placeholder>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  )
}