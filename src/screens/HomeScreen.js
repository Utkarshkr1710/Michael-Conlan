import React, { PureComponent } from "react";

import { connect } from "react-redux";

import { getSlider } from "../redux/actions/slider";
import { getNextMatch } from "../redux/actions/upcomingmatch";
import { getLatestVideo, getExclusiveVideo, getGymVideo, getTrainingVideo, getMatchVideo } from "../redux/actions/video";
import { getFunfacts } from '../redux/actions/funfacts'
import { getGallery } from '../redux/actions/gallery'
import { getBio } from '../redux/actions/bio'
import { getSponsor } from '../redux/actions/sponsor'
import { getLegal } from '../redux/actions/legal'

import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import SplashSceen from "./SplashSreen";
import Navigation from "./Navigation";

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  
  componentWillMount() {
    this.props.dispatch(getSlider());
    this.props.dispatch(getNextMatch());

    this.props.dispatch(getLatestVideo());
    this.props.dispatch(getExclusiveVideo());
    this.props.dispatch(getGymVideo());
    this.props.dispatch(getMatchVideo());
    this.props.dispatch(getTrainingVideo());
    this.props.dispatch(getFunfacts());

    this.props.dispatch(getGallery());

    this.props.dispatch(getBio());

    this.props.dispatch(getLegal());
    this.props.dispatch(getSponsor());

    
  }

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
      return <SplashSceen />;
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
