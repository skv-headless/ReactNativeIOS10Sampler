import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

const SpeechRecognizerManager = NativeModules.SpeechRecognizerManager;

export default class SpeechRecognition extends Component {

  constructor() {
    super();
    this.state = {
      locales: [],
      locale: null,
    };
  }

  componentDidMount() {
    SpeechRecognizerManager.supportedLocales((error, locales) => {
      this.setState({locales});
    });
  }

  render() {
    return <View style={styles.container}>
      <Picker
        selectedValue={this.state.locale}
        onValueChange={(locale) => this.setState({locale})}
      >
        {this.state.locales.map((locale) => {
          return <Picker.Item label={locale} value={locale} key={locale}/>
        })}
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
