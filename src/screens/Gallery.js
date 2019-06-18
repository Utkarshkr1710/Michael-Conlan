import React, { PureComponent } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";

const uuidv4 = require('uuid')

import Carousel from "react-native-looped-carousel";
import Img from "./img";

import Lightbox from "react-native-lightbox";
const WINDOW_WIDTH = Dimensions.get("window").width;

import { connect } from "react-redux";

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 110,
      imgWidth: 110,
      lightbox: false,
      topTabBar: false,
      loading: true,
      URL: 'http://172.245.17.145:5015'
    };
  }

  _renderCarousel = (data, currentPage) => (
    
    <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }} delay={4000} currentPage={currentPage}>
      {data.gallery.map((item, j) => (
        <Image
          key={j}
          style={{ flex: 1 }}
          resizeMode="contain"
          source={{
            uri:   `${this.state.URL}${item.imgUrl}`,
          }}
        />
      ))}
    </Carousel>
  );

  render() {
    const BASE_URL = `http://172.245.17.145:5015`;
    const { gallery } = this.props;
    const { data } = gallery;
    const { imgHeight, imgWidth, loading, lightbox } = this.state;
    // console.warn(data)

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          {gallery ? (
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
              {data.gallery.map((item, i) => (
                <View key={i} style={{ padding: 4 }}>
                  <Lightbox
                    style={{}}
                    willClose={() =>
                      this.setState({
                        imgHeight: 110,
                        imgWidth: 110,
                        lightbox: false
                      })
                    }
                    onOpen={() => {
                      // this.setState({
                      //   imgHeight: "60%",
                      //   imgWidth: "96%",
                      //   Lightbox: true
                      // });
                      Image.getSize(
                        `${BASE_URL}${item.imgUrl}`,
                        (width, height) => {
                          const z = width / height;
                          const y = WINDOW_WIDTH / z;
                          this.setState({
                            imgHeight: y,
                            imgWidth: "100%",
                            lightbox: true
                          });
                        }
                      );
                    }}
                    swipeToDismiss={true}
                    renderContent={() => this._renderCarousel(data, i)}
                  >
                    <Img
                      uri={`${BASE_URL}${item.imgUrl}`}
                      height={imgHeight}
                      width={imgWidth}
                      lightbox={lightbox}
                    />
                  </Lightbox>
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