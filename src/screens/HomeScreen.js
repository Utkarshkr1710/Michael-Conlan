import React, { PureComponent } from "react";

import { connect } from "react-redux";

import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import SplashSreen from "./SplashSreen";
import Navigation from "./Navigation";

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentWillUnmount() {}

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 7000)
    );
  };
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    // console.warn(this.props.state);
    if (this.state.isLoading) {
      return <SplashSreen />;
    }
    return <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    backgroundColor: "black"
  }
});

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(HomeScreen);
