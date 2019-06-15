import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  SafeAreaView
} from "react-native";

import { connect } from "react-redux";

import Lightbox from "react-native-lightbox";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
      imgHeight: 110,
      imgWidth: 110,
      Lightbox: false,
      topTabBar: false
    };
  }

  _renderTopTab = () =>{
    this.setState({topTabBar: !this.state.topTabBar})
  }

  render() {
    const BASE_URL = `http://172.245.17.145:5015`;
    const { gallery } = this.props;
    const { family, professional } = gallery;
    const { topTabBar } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#000",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 2,
              borderRadius: 5
            }}
          >
            <TouchableOpacity style={{ width: "50%", height: "100%" }} onPress={()=>this._renderTopTab()}>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: !topTabBar ? "#159B62" : "#FF883E",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Professional</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "50%", height: "100%" }} onPress={()=>this._renderTopTab()}>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: topTabBar ? "#159B62" : "#FF883E",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 18  }}>Family</Text>
              </View>
            </TouchableOpacity>
          </View>

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
            {(topTabBar ? family.gallery : professional.gallery ).map((item, i) => (
              <View key={i} style={{ padding: 4 }}>
                <Lightbox
                  style={{}}
                  willClose={() =>
                    this.setState({
                      imgHeight: 110,
                      imgWidth: 110,
                      Lightbox: false
                    })
                  }
                  onOpen={() => {
                    this.setState({
                      imgHeight: "60%",
                      imgWidth: "96%",
                      Lightbox: true
                    });
                    // Image.getSize(`${BASE_URL}${item.imgUrl}`, (width, height) =>  this.setState({ imgHeight: height, imgWidth: '100%' }));
                  }}
                  swipeToDismiss={true}
                  //   renderContent = {()=>this.renderCarousel()}
                >
                  <Image
                    source={{
                      uri: `${BASE_URL}${item.imgUrl}`
                    }}
                    style={{
                      height: this.state.imgHeight,
                      width: this.state.imgWidth,
                      borderRadius: 5,
                      marginLeft: this.state.Lightbox ? "2%" : 0
                    }}
                  />
                </Lightbox>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  };
}

export default connect(mapStateToProps)(Gallery);
