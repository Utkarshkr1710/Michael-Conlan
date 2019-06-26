import * as React from "react";
//import React in our project
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
  StyleSheet,
  SafeAreaView
} from "react-native";
//import all the needed components
import { connect } from "react-redux";

import PhotoGrid from "react-native-image-grid";
import Icon from "react-native-vector-icons/AntDesign";

const uuidV4 = require("uuid/v4");

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      imageuri: "",
      ModalVisibleStatus: false
    };
    this.state = { items: [] };
  }

  componentDidMount() {
    const BASE_URL = "https://michaelconlanapp.com";
    const { gallery } = this.props;

    var that = this;
    let items = gallery.data.gallery.map((v, i) => {
      return { id: i, src: `${BASE_URL}${gallery.data.gallery[i].imgUrl}` };
    });
    that.setState({ items });
  }

  ShowModalFunction(visible, imageURL) {
    this.setState({
      ModalVisibleStatus: visible,
      imageuri: imageURL
    });
  }

  renderItem = (item, itemSize, itemPaddingHorizontal) => {
    //Single item of Grid
    return (
      <TouchableOpacity
        key={uuidV4()}
        style={{
          width: itemSize,
          height: itemSize,
          paddingHorizontal: itemPaddingHorizontal
        }}
        onPress={() => {
          this.ShowModalFunction(true, item.src);
        }}
      >
        <Image
          resizeMode="cover"
          style={{ flex: 1 }}
          source={{ uri: item.src, cache: 'force-cache' }}
        />
      </TouchableOpacity>
    );
  };

  render() {
    if (this.state.ModalVisibleStatus) {
      //Modal to show full image with close button
      return (
       <SafeAreaView>
 <Modal
          transparent={true}
          animationType={"fade"}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={() => {
            this.ShowModalFunction(!this.state.ModalVisibleStatus, "");
          }}
        >
          <View style={styles.modelStyle}>
            <Image
              style={styles.fullImageStyle}
              source={{ uri: this.state.imageuri, cache: 'force-cache' }}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                this.ShowModalFunction(!this.state.ModalVisibleStatus, "");
              }}
            >
              <Icon
                name={"closecircleo"}
                size={22}
                color={"white"}
               style={{ position: 'absolute' ,top: 40}}
              />
            </TouchableOpacity>
          </View>
        </Modal>
       </SafeAreaView>
       
      );
    } else {
      //Photo Grid of images
      return (
        <View style={styles.containerStyle}>
          <PhotoGrid
            data={this.state.items}
            itemsPerRow={3}
            itemMargin={2}
            itemPaddingHorizontal={2}
            renderHeader={this.renderHeader}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  };
}

export default connect(mapStateToProps)(Gallery);

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "black"
  },
  fullImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "98%",
    resizeMode: "contain"
  },
  modelStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: "absolute"
  }
});
