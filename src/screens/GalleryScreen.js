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
import Carousel from "react-native-looped-carousel";

import Icon from "react-native-vector-icons/AntDesign";
import ImageComponent from "./img";

const uuidv4 = require("uuid");

const WINDOW_WIDTH = Dimensions.get("window").width;

class GalleryScreen extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imgHeight: 400,
      imgWidth: WINDOW_WIDTH,
      lightbox: false,
      topTabBar: false,
      loading: true,
      URL: "https://michaelconlanapp.com",
      // URL: "http://172.245.17.145:5015",
      screenWidth: WINDOW_WIDTH,
      currentPos: true,
      perform: false
    };
  }

  componentDidMount() {
    if (!this.state.perform) {
      setTimeout(() => {
        this.setState({ loading: false, perform: true });
      }, 500);
      if (this.props.gallery) {
        if (this.props.gallery.data) {
          this.setState({
            data: this.props.gallery.data.gallery
            // screenWidth: scrollXPos
          });
          //   this.scroller.scrollTo({ x: scrollXPos, y: 0 });
        }
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

    // const totalWidth = data.length * WINDOW_WIDTH;
    const imgProps = this.props.navigation.getParam("imgUrl", "NO-ID");
    const currentI = this.props.navigation.getParam("i", "NO-ID");

    // setTimeout(() => {
    //   this.scroller.scrollTo({ x: scrollXPos, y: 0, animated: true });
    // }, 30);

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


        <ScrollView
          horizontal={true}
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
                  top: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {data.length > 0 && (
            
                  <Carousel
                    // key={uuidv4()}
                    currentPage={this.state.currentPage}
                    delay={4000}
                    style={{
                      height: imgHeight,
                      width: imgWidth
                    }}
                    autoplay={true}
                    currentPage={currentI}
                  >
                    {data.map((item, i) => (
                      <ImageComponent
                        key={uuidv4()}
                        uri={`${URL}${item.imgUrl}`}
                        imgProps={`${URL}${imgProps}`}
                        style={{borderRadius: 30,}}
                      />
                    ))}
                   
                  </Carousel>
                )
                // ))
                }
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

export default connect(mapStateToProps)(GalleryScreen);
