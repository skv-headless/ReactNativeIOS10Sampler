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

  renderScene() {
    return <List />;
  }

  renderHeader(props) {
    if (props.scene.route.noHeader) {
      return null;
    }

    return <NavigationHeader
      {...props}
      onNavigateBack={this.handleBackAction.bind(this)}
      renderTitleComponent={this.renderTitleComponent.bind(this)}
    />
  }

  renderTitleComponent(props) {
    return <NavigationHeader.Title>
      iOS 10 Sampler
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
