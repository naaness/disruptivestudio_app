import React from 'react';
import PropTypes from 'prop-types';

// External libs
import {
  Statistic,
  Placeholder
} from 'semantic-ui-react';

/**
 * Primary UI component for user interaction
 */
const CardCrypto = ({loading, name, value}) => {
  
  if (loading) {
    return (
      <LoadingCardCrypto />
    )
  }
  return (
    <Statistic>
      {value?
        <Statistic.Value>
          {value}
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

CardCrypto.propTypes = {
  /**
   * Cargando los datos
   */
  loading: PropTypes.bool,
  /**
   * Nombre de la criptomoneda
   */
  name: PropTypes.string,
  /**
   * Valor del balance
   */
  value: PropTypes.number,
};

CardCrypto.defaultProps = {
  loading: true,
  name: undefined,
  value: undefined,
};

export default CardCrypto