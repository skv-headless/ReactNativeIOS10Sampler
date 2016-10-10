import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class SpeechRecognition extends Component {

  constructor() {
    super();
    this.state = {
      language: 'js',
    }
  }

  render() {
    return <View style={styles.container}>
      <Picker
        selectedValue={this.state.language}
        onValueChange={(lang) => this.setState({language: lang})}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <TouchableOpacity
        style={styles.record}
        onPress={() => {}}
      >
        <Text style={styles.recordText}>Record</Text>
      </TouchableOpacity>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  record: {
    alignSelf: 'center',
  },
  recordText: {
    color: '#007aff',
    fontSize: 21,
    fontWeight: '600',
  },
});
