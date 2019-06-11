import React, { Component } from "react";
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  Platform,
  Linking,
  TouchableWithoutFeedback,
  StatusBar,
  Animated,
  TouchableOpacity
} from "react-native";

import SwiperFlatList from "react-native-swiper-flatlist";
//import ImageView from 'react-native-image-view';
import ProgressBar from "react-native-progress/Bar";

import { Mic1, Mic2, Mic3, Mic4, Mic5 } from "./images";
import { ScrollView } from "react-native-gesture-handler";
export const { width, height } = Dimensions.get("window");
// import Video from "react-native-video";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/FontAwesome";
import Iconss from "react-native-vector-icons/MaterialCommunityIcons";
const newImage = [Mic2, Mic1, Mic3, Mic4, Mic5];

const image = index => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));
function secondsToTime(time) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
      isImageViewVisible: false,
      paused: false,
      progress: 0,
      duration: 0,
      cap: [
        { img: require("./images/Mic1.jpg"), buy: "View Details" }
        // { img: require('./images/Mic2.jpg'), buy:'View Details' },
        // { img: require('./images/Mic3.jpg'), buy:'View Details' },
        // { img: require('./images/Mic4.jpg'), buy:'View Details' },
        // { img: require('./images/Mic5.jpg') ,buy:'View Details' }
      ]
    };
  }
  renderItemComponent = ({ item }) => (
    <View>
      <Image
        style={styles.image}
        source={item.image}
        // resizeMode={Image.resizeMode.cover}
      />
    </View>
  );

  render() {
    const { error } = this.state;
    const { navigate } = this.props.navigation;
    console.warn("wdhgkkkkkj", this.props.navigation);

    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <View style={styles.container}>
            <SwiperFlatList
              autoplay
              autoplayDelay={5}
              // index={0}
              autoplayLoop
              data={items}
              renderItem={this.renderItemComponent}
              //showPagination
            />
          </View>

          {/* {Upcoming Matches} */}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  paddingLeft: 20,
                  color: "white"
                }}
              >
                Next Fight
              </Text>
            </View>
          </View>

          <View>
            {this.state.cap.map((item, i) => (
              <View style={{ flex: 1, margin: 20 }}>
                <TouchableOpacity onPress={() => navigate("Details")}>
                  <Image
                    source={item.img}
                    style={{
                      width: "100%",
                      height: 200
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* {Watch Videos} */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  paddingLeft: 20,
                  color: "white"
                }}
              >
                Latest Videos
              </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigate("Videos")}>
              <View>
                <Text
                  style={{ fontSize: 18, color: "white", paddingRight: 20 }}
                >
                  See all
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View>
            <ScrollView horizontal={true}>
              <View style={{ padding: 20 }}>
                <TouchableOpacity activeOpacity={0.8}>
                  <Image
                    source={require("./images/Match.jpg")}
                    style={{ height: 120, width: 200, borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ padding: 20 }}>
                <TouchableOpacity activeOpacity={0.8}>
                  <Image
                    source={require("./images/Train.jpg")}
                    style={{ height: 120, width: 200, borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ padding: 20 }}>
                <TouchableOpacity activeOpacity={0.8}>
                  <Image
                    source={require("./images/Gym.jpg")}
                    style={{ height: 120, width: 200, borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          {/* {Fun Facts} */}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  paddingLeft: 20,
                  color: "white"
                }}
              >
                Do You Know?
              </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigate("Fun")}>
              <View>
                <Text
                  style={{ fontSize: 18, color: "white", paddingRight: 20 }}
                >
                  See all
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {/* <ScrollView horizontal={true} pagingEnabled={true} > */}
            <View
              style={{
                height: 300,
                width: "90%",
                backgroundColor: "#433D3E",
                marginTop: 20,
                borderRadius: 20
              }}
            >
              <View style={{ alignItems: "center", margin: 20 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "AppleSDGothicNeo-Bold",
                    textAlign: "justify",
                    color: "#D0CFCF"
                  }}
                >
                  What is Michael Conlan favourite song to walk out to on Fight
                  Night?
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("./images/music-icon.jpg")}
                  style={{ height: 70, width: 70, borderRadius: 10 }}
                />
              </View>
              <View style={{ alignItems: "center", marginTop: 30 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "AppleSDGothicNeo-Bold",
                    color: "#D0CFCF"
                  }}
                >
                  Grace -by Jim McCann
                </Text>
              </View>
            </View>
          </View>

          {/* {Social Icons} */}

          <View style={{ marginTop: 50, marginBottom: 20 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Icon
                name="facebook"
                size={30}
                color="#159B62"
                onPress={() =>
                  Linking.openURL(
                    "https://www.facebook.com/MichaelConlanBoxer/"
                  )
                }
              />

              <Icon
                name="instagram"
                size={30}
                color="white"
                onPress={() =>
                  Linking.openURL(
                    "https://www.instagram.com/mickconlan11/?hl=en"
                  )
                }
              />

              <Icon
                name="twitter"
                size={30}
                color="#ffaa3e"
                onPress={() =>
                  Linking.openURL(
                    "https://twitter.com/mickconlan11?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  )
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  image: {
    height: height * 0.4,
    width
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: "center"
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center"
  },
  videoCover: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255, .9)"
  },
  error: {
    backgroundColor: "#000"
  },
  controls: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10
  },
  mainButton: {
    marginRight: 15
  },
  duration: {
    color: "#FFF",
    marginLeft: 15
  },
  backgroundVideo: {
    width: "100%",
    height: 200
  }
});
