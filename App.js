'use strict'

import React, { Component } from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect, Provider } from 'react-redux'

import Routes from './src/config/routes'

import getStore from './src/store'

const AppNavigator = StackNavigator(Routes, {
  headerMode: 'none',
  initialRouteName: 'Home'
})

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

class Root extends Component {
  render() {
    return (
      <AppNavigator
          navigation={ addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav
          })}
      />
    )
  }
}

const AppWithNavigationState = connect(mapStateToProps)(Root)

const store = getStore(navReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
