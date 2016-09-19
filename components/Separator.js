import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default ({sectionID, rowID}) => {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#d1d1d4',
    height: StyleSheet.hairlineWidth,
  },
});
