import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  Text
} from "react-native";
import FastImage from "react-native-fast-image";

import Icon from "react-native-vector-icons/AntDesign";

const uuidv4 = require("uuid");

const WINDOW_WIDTH = Dimensions.get("window").width;

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imgHeight: 110,
      imgWidth: 110,
      lightbox: false,
      topTabBar: false,
      loading: true,
      URL: "https://michaelconlanapp.com",
      // URL: "http://172.245.17.145:5015",
      screenWidth: WINDOW_WIDTH,
      currentPos: true
    };
  }

  componentWillMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    if (this.props.gallery) {
      if (this.props.gallery.data) {
        this.setState({
          data: this.props.gallery.data.gallery
        });
      }
    }
  };

  // scrollToImage = i => {
  //   scrollXPos = WINDOW_WIDTH * 3;
  //   this.scroller.scrollTo({ x: scrollXPos, y: 0 });
  // };

  render() {
    const {
      imgHeight,
      imgWidth,
      loading,
      lightbox,
      URL,
      data,
      screenWidth,
      currentPos
    } = this.state;

    const totalWidth = data.length * WINDOW_WIDTH;

    if (currentPos) {
      setTimeout(() => {
        scrollXPos = this.state.screenWidth;
        this.scroller.scrollTo({ x: scrollXPos, y: 0 });
      }, 30);
    }

    // if (lightbox && !currentPos && totalWidth >= screenWidth) {
    //   setTimeout(() => {
    //     scrollXPos = this.state.screenWidth + WINDOW_WIDTH;
    //     this.scroller.scrollTo({ x: scrollXPos, y: 0 });
    //     this.setState({ screenWidth: scrollXPos });
    //   }, 6000);
    // }
    return (
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        {loading && (
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              justifyContent: "center",
              alignItems: "center",
              opacity: 1
            }}
          >
            <ActivityIndicator size={"small"} color={"#fff"} />
            <Text style={{ color: "#fff", marginTop: 7.5 }}>Loading...</Text>
          </View>
        )}

        {lightbox && (
          <View
            style={{
              width: "100%",
              height: 40,
              justifyContent: "center",
              // alignItems: "center",
              backgroundColor: "#000"
            }}
          >
            <Icon
              name={"close"}
              size={22}
              style={{ marginLeft: 10 }}
              color={"white"}
              onPress={() =>
                this.setState({
                  imgHeight: 110,
                  imgWidth: 110,
                  lightbox: false,
                  currentPos: true,
                  screenWidth: WINDOW_WIDTH
                })
              }
            />
          </View>
        )}

        <ScrollView
          horizontal={lightbox}
          ref={scroller => {
            this.scroller = scroller;
          }}
        >
          <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            {data.length > 0 ? (
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  left: "0%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  top: 10
                }}
              >
                {data.length > 0 &&
                  data.map((item, i) => (
                    <View key={uuidv4()} style={{ padding: lightbox ? 0 : 4 }}>
                      <TouchableOpacity
                        onPress={() => {
                          const scrollXPos = WINDOW_WIDTH * i;
                          this.props.navigation.navigate("GalleryScreen", {
                            scrollXPos,
                            imgUrl: item.imgUrl,
                            i
                          });

                          // this.setState({
                          //   imgHeight: 350,
                          //   imgWidth: WINDOW_WIDTH,
                          //   // Platform.OS === "ios" ? 350 : WINDOW_WIDTH,
                          //   lightbox: true,
                          //   screenWidth: scrollXPos
                          // });
                          // setTimeout(() => {
                          //   this.setState({ currentPos: false });
                          // }, 1000);
                        }}
                      >
                        {/* <Image
                          source={{ uri: `${URL}${item.imgUrl}` }}
                          style={{
                            height: imgHeight,
                            width: imgWidth,
                            borderRadius: 5
                          }}
                        /> */}
                        <FastImage
                          style={{
                            height: imgHeight,
                            width: imgWidth,
                            borderRadius: 5
                          }}
                          source={{
                            uri: `${URL}${item.imgUrl}`,
                            headers: { Authorization: "someAuthToken" },
                            priority: FastImage.priority.high
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>
            ) : (
              <ActivityIndicator
                style={{
                  flex: 1,
                  marginTop: 200,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                size={"small"}
                color={"#aeaeae"}
              />
            )}
          </SafeAreaView>
        </ScrollView>
      </View>
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
