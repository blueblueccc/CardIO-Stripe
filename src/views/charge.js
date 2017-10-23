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
import { Input } from '../components/common/Input'
import { Confirm } from '../components/common/Confirm'

// var stripe = require('stripe')(Constant.stripe_test_secret_key)

export default class Charge extends Component<{}> {
  constructor(props) {
      super(props)
      this.state = {
        amount: '',
        customer: 'this.props.navigation.state.params.customer',
        isModal: false,
        alert: 'Please charge as much as you want'
      }
  }

  async charge() {
    let data = {
      amount: this.state.amount,
      currency: 'usd',
      customer: this.state.customer
    }
    try {
      let response = await api.charges.create(data)
      let responseData = await response.json()
      console.log(responseData)
      this.setState({alert: 'Charged successfully!'})
    }
    catch(err) {

    }
  }

  plan() {

  }

  subscription(plan) {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.title }>{ this.state.alert }</Text>
        <Input
          label={ 'Amount' }
          placeholder={ 'USD account' }
          onChangeText={ (text) => {this.setState({amount:text})} } />
        <Button
          children={ 'Charge' }
          onPress={ () => {this.charge()} } />
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
  title: {
    width: '100%',
    height: 40,
    fontSize: 17,
    marginTop: 60,
    textAlign: 'center'
  }
});
