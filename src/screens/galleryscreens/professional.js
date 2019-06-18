import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  View,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";

import Lightbox from "react-native-lightbox";
const WINDOW_WIDTH = Dimensions.get("window").width;

class Professional extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 110,
      imgWidth: 110,
      Lightbox: false,
      topTabBar: false,
      loading: true
    };
  }

  render() {
    const BASE_URL = `http://172.245.17.145:5015`;
    const { gallery } = this.props;
    const { family, professional } = gallery;
    const { imgHeight, imgWidth, loading } = this.state;
    return gallery ? (
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
        {professional.gallery.map((item, i) => (
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
                Image.getSize(`${BASE_URL}${item.imgUrl}`, (width, height) => {
                  const z = width / height;
                  const y = WINDOW_WIDTH / z;
                  this.setState({
                    imgHeight: y,
                    imgWidth: "100%"
                  });
                });
              }}
              swipeToDismiss={true}
              //   renderContent = {()=>this.renderCarousel()}
            >
              <Image
                source={{
                  uri: `${BASE_URL}${item.imgUrl}`
                }}
                style={{
                  height: imgHeight,
                  width: imgWidth,
                  borderRadius: 5,
                  marginLeft: this.state.Lightbox ? "2%" : 0
                }}
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
    );
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  };
}

export default connect(mapStateToProps)(Professional);
