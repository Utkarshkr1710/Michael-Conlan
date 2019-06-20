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

// import Carousel from "react-native-looped-carousel";
import Img from "./img";

import Lightbox from "react-native-lightbox";
const WINDOW_WIDTH = Dimensions.get("window").width;

// import { connect } from "react-redux";

export default class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/20.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/21.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/22.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/23.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/24.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/25.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/26.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/27.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/28.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/29.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/30.jpg" },
        
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/31.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/32.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/33.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/34.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/35.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/36.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/37.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/38.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/39.jpg" },
        
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/40.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/41.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/42.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/43.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/44.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/45.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/46.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/47.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/48.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/49.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/50.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/51.jpg" },
        { imgUrl: "https://www.michaelconlanapp.com/uploads/gallery/52.jpg" }
        ],
      imgHeight: 110,
      imgWidth: 110,
      lightbox: false,
      topTabBar: false,
      loading: true,
      URL: 'https://michaelconlanapp.com'
    };
  }

  _renderCarousel = ( currentPage) => (

        <Image
          // key={j}
          style={{ flex: 1 }}
          resizeMode="contain"
          source={{
            uri: "https://www.michaelconlanapp.com/uploads/gallery/52.jpg"
          }}
        />
    
  );

  render() {
    // const BASE_URL = `https://www.michaelconlanapp.com`;
    // const { gallery } = this.props;
    // const { data } = gallery;
    const { imgHeight, imgWidth, loading, lightbox,URL } = this.state;
    // console.warn(data)

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          {true ? (
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
              {this.state.data.map((item, i) => (
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
                      this.setState({
                        imgHeight: "65%",
                        imgWidth: WINDOW_WIDTH,
                        lightbox: true
                      });
                      // Image.getSize(
                      //   `${item.imgUrl}`,
                      //   (width, height) => {
                      //     const z = width / height;
                      //     const y = WINDOW_WIDTH / z;
                      //     this.setState({
                      //       imgHeight: y,
                      //       imgWidth: "100%",
                      //       lightbox: true
                      //     });
                          
                      //   }
                      // );
                    }}
                    swipeToDismiss={true}
                    // renderContent={() => this._renderCarousel( i)}
                  >
                  <Image source={{uri: item.imgUrl}} style={{height: imgHeight, width: imgWidth}} />
                    {/* <Img
                      uri={item.imgUrl}
                      height={imgHeight}
                      width={imgWidth}
                      lightbox={lightbox}
                    /> */}
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

// function mapStateToProps(state) {
//   return {
//     gallery: state.gallery
//   };
// }

// export default connect(mapStateToProps)(Gallery);