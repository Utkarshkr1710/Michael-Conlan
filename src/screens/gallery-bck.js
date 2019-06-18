import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  SafeAreaView,
  Dimensions,
  ActivityIndicator, StyleSheet
} from "react-native";

import { connect } from "react-redux";

import { TabView, SceneMap } from 'react-native-tab-view';
import Family from './galleryscreens/family'
import Profesional from './galleryscreens/professional'

import Lightbox from "react-native-lightbox";
const WINDOW_WIDTH = Dimensions.get("window").width;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
      imgHeight: 110,
      imgWidth: 110,
      Lightbox: false,
      topTabBar: false,
      loading: false,
      index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ]
    };
  }

  _renderTopTab = () => {
    this.setState({ loading: true, topTabBar: !this.state.topTabBar });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  };

  render() {
    const BASE_URL = `http://172.245.17.145:5015`;
    const { gallery } = this.props;
    const { family, professional } = gallery;
    const { topTabBar, loading } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          {/* <View
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
            <TouchableOpacity
              style={{ width: "50%", height: "100%" }}
              onPress={() => this._renderTopTab()}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: !topTabBar ? "#159B62" : "#FF883E",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  Professional
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: "50%", height: "100%" }}
              onPress={() => this._renderTopTab()}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: topTabBar ? "#159B62" : "#FF883E",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Family</Text>
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
              {!topTabBar
                ? professional.gallery.map((item, i) => (
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
                                imgWidth: "100%"
                              });
                            }
                          );
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
                  ))
                : family.gallery.map((item, i) => (
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
                                imgWidth: "100%"
                              });
                            }
                          );
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
            </View> */}
         



<TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Profesional,
          second: Family,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      /> 


        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  };
}

export default connect(mapStateToProps)(Gallery);
