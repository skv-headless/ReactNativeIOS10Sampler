import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TabBarIOS,
} from 'react-native';

export default class TabBar extends Component {

  constructor() {
    super();

    this.state = {
      selectedTab: 'blueTab',
    };
  }

  render() {
    return <TabBarIOS>
			<TabBarIOS.Item
				title='Blue tab'
        badge={9}
        systemIcon='bookmarks'
				selected={this.state.selectedTab === 'blueTab'}
				onPress={() => {
					this.setState({ selectedTab: 'blueTab' });
        }}
      >
        <Text>Hello blue tab</Text>
			</TabBarIOS.Item>

			<TabBarIOS.Item
				title='Red tab'
        systemIcon='featured'
				selected={this.state.selectedTab === 'redTab'}
				onPress={() => {
					this.setState({ selectedTab: 'redTab' });
        }}
      >
        <Text>Hello red tab</Text>
			</TabBarIOS.Item>
    </TabBarIOS>;
  }
}

const styles = StyleSheet.create({
});
