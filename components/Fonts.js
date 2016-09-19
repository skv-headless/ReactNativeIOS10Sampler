import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import Separator from './Separator';


export default class ReactNativeIOS10Sampler extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        'Futura-Bold',
        'AmericanTypewriter-Semibold',
        'MyanmarSangamMN-Bold',
        'MyanmarSangamMN',
      ]),
    }
  }

  render() {
    return <ListView
      style={styles.list}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}
      renderSeparator={(sectionID, rowID) => <Separator key={rowID} />}
    />
  }

  renderRow(rowData) {
    return <Text style={[styles.row, {fontFamily: rowData}]}>{rowData}</Text>
  }
}

const styles = StyleSheet.create({
  list: {
    paddingLeft: 15,
    backgroundColor: 'white',
  },
  row: {
    marginVertical: 5,
  },
});
