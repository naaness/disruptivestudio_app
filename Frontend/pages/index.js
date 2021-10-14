import React, { useState, useEffect } from 'react';

// Api
import { balanceApi } from '../api/balances';

// Services
// import socket from '../helpers/socket';

// Layouts
import BasicLayout from '../layouts/BasicLayout';

// Components
import FormBalance from '../components/FormBalance';
import CardCrypto from '../components/CardCrypto';
import TableCrypto from '../components/TableCrypto';

// External libs
import {
  Form,
  Segment,
  Button,
  Header,
  Grid,
  Statistic,
  Placeholder,
  Icon,
  Table,
  Label
} from 'semantic-ui-react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

// Constants
import CRYPTOCURRENCY from '../constants/cryptocurrency';
import URL from '../constants/Url';

const client = new W3CWebSocket(URL.SOCKET_URL);

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [cryptos, setCryptos] = useState({...CRYPTOCURRENCY})
  const [showBalance, setShowBalance] = useState(false)

  // Realizar la primera consulta
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      if (!showBalance) {
        return
      }
      const dataFromServer = JSON.parse(message.data);
      let newCryptos = {...cryptos}
      dataFromServer.map(data => {
        newCryptos[data.symbol].change = data.change.toFixed(2)
        newCryptos[data.symbol].price_usd = (newCryptos[data.symbol].price_usd * (1 + data.change)).toFixed(2)
      })
      setCryptos(newCryptos)
    };
  }, [showBalance])

  const onGetBalance = async(amount) => {
    setLoading(true)
    const res = await balanceApi(amount)
    let newCryptos = {...cryptos}
    res.map(r => {
      newCryptos[r.symbol].balance = r.balance
      newCryptos[r.symbol].price_usd = r.price_usd.toFixed(2)
    })
    setCryptos(newCryptos)
    setLoading(false)
    setShowBalance(true)
  }

  return (
    <BasicLayout className="home">
      <Header
        as='h2'
        textAlign='center'
        className="home__header"
      >
        Calcular balance
      </Header>
      
      
      <Segment>
        <FormBalance
          loading={loading}
          onGetBalance={onGetBalance}
        />
      </Segment>
      
      <Segment textAlign='center'>
        {showBalance?
          <Grid textAlign='center' columns={3}>
            {Object.keys(cryptos).map(crypto => {
              return(
                <Grid.Column
                  key={crypto}
                >
                  <CardCrypto
                    name={cryptos[crypto].NAME}
                    value={cryptos[crypto].balance}
                    loading={loading}
                  />
                </Grid.Column>
              )
            })}
          </Grid>
        :
          'Ingresa un monto para calcular el balance'
        }
      </Segment>

      <Segment>
        <TableCrypto
          cryptos={cryptos}
        />
      </Segment>
    </BasicLayout>
  );
}
