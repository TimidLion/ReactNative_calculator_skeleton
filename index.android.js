/**
 * Simple React Native Calculator
 * For practice
 * Only for Integer values
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CalButton extends Component {
  constructor(props){
  	super(props);
  }

  render(){
  	return (
      <View>
      </View>
  	);
  }
}

class Board extends React.Component {
  constructor() {
    super();
  }

  renderNumber(i) {
  }

  renderOperator(op) {
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
          {this.renderNumber(1)}
          {this.renderNumber(2)}
          {this.renderNumber(3)}
          {this.renderNumber(0)}
        </View>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
          {this.renderNumber(4)}
          {this.renderNumber(5)}
          {this.renderNumber(6)}
          {this.renderOperator('C')}
        </View>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
          {this.renderNumber(7)}
          {this.renderNumber(8)}
          {this.renderNumber(9)}
          {this.renderOperator('=')}
        </View>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
       	  {this.renderOperator('+')}
       	  {this.renderOperator('-')}
       	  {this.renderOperator('*')}
       	  {this.renderOperator('/')}
        </View>
      </View>
    );
  }
}

export default class ReactNative_Calc extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      	<View style={{height:200}} />
      	<Board />
      	<View style={{height:100}} />
    		<Text>
    			Calculator Skeleton
    		</Text>
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
  }
});

AppRegistry.registerComponent('ReactNative_Calc', () => ReactNative_Calc);