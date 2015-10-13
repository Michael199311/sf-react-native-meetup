'use strict';

var React = require('react-native');
var {
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} = React;
var styles = require('./styles');

var AddItemView = React.createClass({
  getInitialState: function() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    };
  },

  onPressSubmit: function() {
    var state = 'First name: ' + this.state.firstName + '\n' +
                'Last name: ' + this.state.lastName + '\n' +
                'Phone number: ' + this.state.phoneNumber;
    ToastAndroid.show(state, ToastAndroid.LONG);
  },

  render: function() {
    return (
      <View style={styles.addItemView}>
        <TextInput
          placeholder='First Name'
          value={this.state.firstName}
          onChangeText={(text) => this.setState({
            firstName: text
          })}
        />
        <TextInput
          placeholder='Last Name'
          value={this.state.lastName}
          onChangeText={(text) => this.setState({
            lastName: text
          })}
        />
        <TextInput
          placeholder='Phone Number'
          value={this.state.phoneNumber}
          onChangeText={(text) => this.setState({
            phoneNumber: text
          })}
          keyboardType='numeric'
        />
        <TouchableHighlight
          underlayColor={'#F5FCFF'}
          style={styles.addItemButton}
          onPress={this.onPressSubmit}>
          <Text style={styles.addItemButtonText}>Add a new item</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = AddItemView;
