import React, { PureComponent } from "react";
import { Image, Dimensions, View, Text } from "react-native";
const WINDOW_WIDTH = Dimensions.get("window").width;
import FastImage from "react-native-fast-image";
// import PinchZoomView from "react-native-pinch-zoom-view";

export default class ImageComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 400,
      imgWidth: WINDOW_WIDTH,
      lightbox: false,
      imgPos: false
    };
  }
  componentDidMount() {
    const { imgHeight, imgWidth, imgPos } = this.state;
    const { uri, height, width, lightbox, imgProps } = this.props;

    Image.getSize(uri, (width, height) => {
      const z = width / height;
      const y = WINDOW_WIDTH / z;
      this.setState({
        imgHeight: y,
        imgWidth: WINDOW_WIDTH,
        imgPos: true
      });
    });
  }
  
  componentWillUnmount() {
   
  }

  render() {
    const { uri, height, width, lightbox, imgProps } = this.props;
    const { imgHeight, imgWidth, imgPos } = this.state;

    return (
      // <PinchZoomView scalable={true} minScale={0.5} maxScale={2}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FastImage
            style={{
              width: imgWidth,
              height: imgHeight,
              justifyContent: "center",
              alignItems: "center"
            }}
            source={{
              uri: uri,
              headers: { Authorization: "someAuthToken" },
              priority:
                uri === imgProps
                  ? FastImage.priority.high
                  : FastImage.priority.low
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      // </PinchZoomView>

      // <Image
      //   source={{
      //     uri
      //   }}
      //   style={{
      //     height: lightbox ? height : imgHeight,
      //     width: lightbox ? width : imgWidth,
      //     borderRadius: 4,
      //     marginLeft: this.state.Lightbox ? "2%" : 0
      //   }}
      // />
    );
  }
}
