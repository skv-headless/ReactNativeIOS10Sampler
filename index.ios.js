import _ from 'lodash';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigationExperimental,
} from 'react-native';
const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  Header: NavigationHeader,
} = NavigationExperimental;
import List from './components/List';
import Fonts from './components/Fonts';
import TabBar from './components/TabBar';
import SpeechRecognition from './components/SpeechRecognition';

function createReducer(initialState) {
  return (currentState = initialState, action) => {
    switch (action.type) {
      case 'reset':
        return NavigationStateUtils.reset(currentState, action.payload);
      case 'push':
        return NavigationStateUtils.push(currentState, action.payload);
      case 'pop':
        return currentState.index > 0 ?
        NavigationStateUtils.pop(currentState) :
        currentState;
      default:
        return currentState;
    }
  }
}

const NavReducer = createReducer({
  index: 0,
  routes: [{key: 'list'}]
});

class ReactNativeIOS10Sampler extends Component {
  constructor() {
    super();
    this.state = {
      navState: NavReducer(undefined, {}),
    };
  }


  render() {
    return <NavigationCardStack
      style={styles.container}
      navigationState={this.state.navState}
      renderScene={this.renderScene.bind(this)}
      renderHeader={this.renderHeader.bind(this)}
      onNavigateBack={this.handleBackAction.bind(this)}
    />;
  }

  renderScene(props) {
    const key = props.scene.route.key;

    if (key === 'fonts') {
      return <Fonts />;
    }

    if (key === 'tabbar') {
      return <TabBar />;
    }

    if (key === 'speach-recognition') {
      return <SpeechRecognition />;
    }

    return <List
      navigate={this.navigate.bind(this)}
    />;
  }

  renderHeader(props) {
    return <NavigationHeader
      {...props}
      onNavigateBack={this.handleBackAction.bind(this)}
      renderTitleComponent={this.renderTitleComponent.bind(this)}
    />
  }

  renderTitleComponent(props) {
    return <NavigationHeader.Title>
      {_.get(props, 'scene.route.title', 'iOS 10 Sampler')}
    </NavigationHeader.Title>;
  }

  navigate(payload) {
    const navState = NavReducer(this.state.navState, payload);
    this.setState({navState});
  }

  handleBackAction() {
    return this.navigate({type: 'pop'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReactNativeIOS10Sampler', () => ReactNativeIOS10Sampler);
