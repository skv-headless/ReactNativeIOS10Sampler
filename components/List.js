import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class List extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: 'Speech Recognition',
          description: 'Speech Recognition demo using Speech Framework. All available languages can be selected.',
        },
        {
          title: 'Looper',
          description: 'Loop playback demo using AVPlayerLooper.',
        },
        {
          title: 'Live Photo Capturing',
          description: 'Live Photo Capturing example using AVCapturePhotoOutput.',
        },
        {
          title: 'Audio Fade-in/out',
          description: 'Audio fade-in/out demo.',
        },
        {
          title: 'Metal CNN Basic: Digit Detection',
          description: 'Hand-writing digit detection using CNN (Convolutional Neural Network) by Metal Performance Shaders.',
        },
        {
          title: 'Metal CNN Advanced: Image Recognition',
          description: 'Real-time image recognition using CNN (Convolutional Neural Network) by Metal Performance Shaders.',
        },
        {
          title: 'PropertyAnimator: Position',
          description: 'Animating view\'s position & color using UIViewPropertyAnimator.',
        },
        {
          title: 'PropertyAnimator: Blur',
          description: 'Animating blur effect using UIViewPropertyAnimator.',
        },
        {
          title: 'Preview Interaction',
          description: 'Peek & Pop interactions with 3D touch using UIPreviewInteraction.',
        },
        {
          title: 'Notification with Image',
          description: 'Local notification with an image using UserNotifications framework.',
        },
        {
          title: 'Sticker Pack',
          description: 'Example of Sticker Pack for iMessage',
        },
        {
          title: 'Core Data Stack',
          description: 'Simple Core Data stack using NSPersistentContainer',
        },
        {
          title: 'TabBar Customization',
          description: 'Customization sample for UITabBar\'s badge using text attributes.',
        },
        {
          title: 'New filters',
          description: 'New filters of CIFilter in Core Image',
        },
        {
          title: 'New Fonts',
          description: 'New Fonts gallery',
        },
        {
          title: 'Proactive: Location Suggestions',
          description: 'This sample demonstrates how to use new `mapItem` property of NSUserActivity to integrate with location suggestions',
        },
        {
          title: 'Attributed Speech',
          description: 'Attributed Speech demo using attributedSpeechString of AVSpeechUtterance.',
        },
      ]),
    };
  }

  render() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}
      renderSeparator={(sectionID, rowID) => <View key={rowID} style={styles.separator} />}
    />;
  }

  renderRow(rowData) {
    return <View style={styles.feature}>
      <Text style={styles.title}>{rowData.title}</Text>
      <Text style={styles.description}>{rowData.description}</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#d1d1d4',
    height: 1,
  },
  feature: {
    padding: 15,
  },
  title: {
    color: '#007aff',
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    fontSize: 10,
  },
})
