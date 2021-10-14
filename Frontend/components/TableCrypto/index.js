import React from 'react';

// External libs
import { Icon, Table } from 'semantic-ui-react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function TableCrypto(props) {
  const { cryptos } = props
  return (
    <>
      <Table
        celled
        inverted
        id="table-to-xls"
      >

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Criptomoneda
            </Table.HeaderCell>
            <Table.HeaderCell
              textAlign='right'
            >
              USD
            </Table.HeaderCell>
            <Table.HeaderCell
              textAlign='right'
            >
              Cambio vs USD
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(cryptos).map(crypto => {
            // Procesar tipo de cambio (positivo o negativo) y su icono
            let typeChange = {}
            let typeIcon = null
            if (cryptos[crypto].change) {
              if (cryptos[crypto].change > 0) {
                typeChange = { color: 'green' }
                typeIcon = 'angle double up'
              } else {
                typeChange = { color: 'red' }
                typeIcon = 'angle double down'
              }
            }
            return(
              <Table.Row
                key={crypto}
              >
                <Table.Cell>
                  <Icon name={cryptos[crypto].ICON} />
                  {cryptos[crypto].NAME}
                </Table.Cell>
                <Table.Cell
                  textAlign='right'
                >
                  {!isNaN(cryptos[crypto].price_usd)?
                    `$${cryptos[crypto].price_usd}`
                  :'None'}
                </Table.Cell>
                <Table.Cell
                  textAlign='right'
                >
                  {typeIcon?
                    <Icon name={typeIcon} color={typeChange.color}/>
                  :null}
                  {!isNaN(cryptos[crypto].change)?
                    <span style={typeChange}>
                      {cryptos[crypto].change * 100}%
                    </span>
                  :'None'}
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      <ReactHTMLTableToExcel
        id="btn-table-xls-button"
        className="ui fluid primary button"
        table="table-to-xls"
        filename="criptomonedasxls"
        sheet="criptomonedasxls"
        buttonText="Descargar as XLS"
      />
    </>
  )
}
