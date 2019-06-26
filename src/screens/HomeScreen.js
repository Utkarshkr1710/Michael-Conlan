import React, { PureComponent } from "react";

import { connect } from "react-redux";

import { getSlider } from "../redux/actions/slider";
import { getNextMatch } from "../redux/actions/upcomingmatch";
import {
  getLatestVideo,
  getExclusiveVideo,
  getGymVideo,
  getTrainingVideo,
  getMatchVideo
} from "../redux/actions/video";
import { getFunfacts } from "../redux/actions/funfacts";
import { getGallery } from "../redux/actions/gallery";
import { getBio } from "../redux/actions/bio";
import { getSponsor } from "../redux/actions/sponsor";
import { getLegal } from "../redux/actions/legal";

import EntypoIcon from "react-native-vector-icons/Entypo";

import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
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

  _refreshApp = () => {
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
  };

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
    const { sliderData, nextMatchData } = this.props;
    if (this.state.isLoading) {
      return <SplashSceen />;
    } else if (!sliderData || !nextMatchData) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <EntypoIcon name={"emoji-sad"} size={60} color={"#FF883E"} />
          <Text
            style={{
              color: "#fff",
              width: "80%",
              fontSize: 15,
              textAlign: "justify"
            }}
          >
            {"\n\n"}
            Something Went Wrong! {"\n"}Please check your internet connect or
            {"\n"}try again.{"\n\n"}
          </Text>
          <Button
            title="Refresh"
            color="#159B62"
            onPress={() => this._refreshApp()}
          />
        </View>
      );
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
    state,
    sliderData: state.sliderData.data,
    nextMatchData: state.nextMatchData.data
  };
}

export default connect(mapStateToProps)(HomeScreen);
