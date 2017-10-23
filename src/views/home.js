'use strict'

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { CardIOView, CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io'

import api from '../api/stripe'
import Constant from '../constant'
import { Button } from '../components/common/Button'
import { Confirm } from '../components/common/Confirm'

export default class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
          isModal: false,
          error: ''
        }
    }

    componentWillMount() {
        if (Platform.OS === 'ios') {
	          CardIOUtilities.preload();
	      }
    }

    scanCard() {
      CardIOModule.scanCard().then(card => {
        this.createToken(card)
      })
      .catch(() => {
        this.setState({
          isModal: true,
          error: 'Scanning failed!'
        })
      })
    }

    async createToken(card) {
      console.log(card.cardNumber)
      try {
        let response = await api.tokens.create(card)
        let responseData = await response.json()
        console.log(responseData)
        this.props.navigation.navigate('Create', {token:responseData.id})
      }
      catch(err) {
        this.setState({
          isModal: true,
          error: err
        })
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <Button
            children={ 'CardIO' }
            onPress={ this.scanCard.bind(this) } />
          {
            this.state.isModal &&
              <Confirm
                visible={ this.state.isModal }
                error={ this.state.error }
                onAccept={ () => {this.setState({ isModal:false })} } />
          }
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: '70%',
    height: 40,
    backgroundColor: 'pink'
  }
});
