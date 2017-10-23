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

export default class Create extends Component<{}> {
  constructor(props) {
      super(props)
      this.state = {
        email: '',
        token: this.props.navigation.state.params.token,
        isModal: false,
        error: ''
      }
  }

  async createCustomer() {
    let data = {
      source: this.state.token,
      description: 'Ava Jackson',
      email: this.state.email
    }
    try {
      let response = await api.customers.create(data)
      let responseData = await response.json()
      this.setState({
        isModal: true,
        error: 'Created customer account!'
      })
      this.props.navigation.navigate('Charge', {customer:responseData.id})
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
        <Input
          label={ 'Email' }
          placeholder={ 'Email address' }
          onChangeText={ (text) => {this.setState({email:text})} } />
        <Button
          children={ 'Create customer account' }
          onPress={ () => {this.createCustomer()} } />
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
});
