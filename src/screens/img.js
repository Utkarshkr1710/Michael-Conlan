import React, { PureComponent } from "react";
import { View, Text, Image, Dimensions } from "react-native";
const WINDOW_WIDTH = Dimensions.get("window").width;

export default class Img extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 110,
      imgWidth: 110,
      lightbox: false
    };
  }

  render() {
    const { uri, height, width, lightbox } = this.props;
    const { imgHeight, imgWidth } = this.state;

    // Image.getSize(uri, (width, height) => {
    //   const z = width / height;
    //   const y = 110 / z;
    //   this.setState({
    //     imgHeight: y,
    //     imgWidth: 110
    //   });
    //   // console.warn(width," ", height, " lightbox ", lightbox)
    // });

    return (
      <Image
        source={{
          uri,
          cache: "default"
        }}
        style={{
          height: lightbox ? height : imgHeight,
          width: lightbox ? width : imgWidth,
          borderRadius: 4,
          marginLeft: this.state.Lightbox ? "2%" : 0
        }}
      />
    );
  }
}
