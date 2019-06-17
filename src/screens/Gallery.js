import React, { Component } from "react";
import { ScrollView, SafeAreaView, Dimensions, StyleSheet } from "react-native";

import { connect } from "react-redux";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Family from "./galleryscreens/family";
import Profesional from "./galleryscreens/professional";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "profesional", title: "Professional" },
        { key: "family", title: "Family" }
      ]
    };
  }

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        // indicatorStyle={styles.indicator}
        style={styles.tabbar}
        // labelStyle={{ fontWeight: "600"}}
        activeColor={'#fff'}
        inactiveColor={'#000'}
        // inactiveColor={styles.inactive}
      />
    );
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              profesional: Profesional,
              family: Family
            })}
            onIndexChange={index => this.setState({ index })}
            renderTabBar={this._renderTabBar}
            initialLayout={{
              width: Dimensions.get("window").width,
              backgroundColor: "#007"
            }}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  tabbar: {
    backgroundColor: "#159B62"
  },
  indicator: {
    backgroundColor: "#FF883E"
  }
});

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  };
}

export default connect(mapStateToProps)(Gallery);
