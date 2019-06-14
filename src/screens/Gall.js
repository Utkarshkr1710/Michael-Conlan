import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

const renderCarousel = () => (
  <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      
      source= {require("../../images/3.jpg")}     />
    <View style={{ backgroundColor: '#6C7A89', flex: 1 }}/>
    <View style={{ backgroundColor: '#019875', flex: 1 }}/>
    <View style={{ backgroundColor: '#E67E22', flex: 1 }}/>
  </Carousel>
)

export default () => (
  <ScrollView style={styles.container}>
    <Lightbox underlayColor="white">
      <Image
        style={styles.contain}
        resizeMode="contain"
        source= {require("../../images/1.jpg")}
      />
    </Lightbox>
    <Lightbox springConfig={{tension: 15, friction: 7}} swipeToDismiss={false} renderContent={renderCarousel}>
      <Image
        style={styles.carousel}
        resizeMode="contain"
        source= {require("../../images/2.jpg")}      />
    </Lightbox>
    <Lightbox
      renderHeader={close => (
        <TouchableOpacity onPress={close}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      )}>
      <Image
        style={styles.carousel}
        resizeMode="contain"
        source= {require("../../images/3.jpg")} />
    </Lightbox>
   
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE_PADDING,
    backgroundColor:'black'
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
  customHeaderBox: {
    height: 150,
    backgroundColor: '#6C7A89',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginLeft: -BASE_PADDING,
    marginRight: -BASE_PADDING,
  },
  col: {
    flex: 1,
  },
  square: {
    width: WINDOW_WIDTH / 2,
    height: WINDOW_WIDTH / 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  squareFirst: {
    backgroundColor: '#C0392B',
  },
  squareSecond: {
    backgroundColor: '#019875',
  },
  squareText: {
    textAlign: 'center',
    color: 'white',
  },
  carousel: {
    height: WINDOW_WIDTH - BASE_PADDING * 2,
    width: WINDOW_WIDTH - BASE_PADDING * 2,
    backgroundColor: 'white',
  },
  contain: {
    flex: 1,
    height: 150,
  },
  text: {
    marginVertical: BASE_PADDING * 2,
  },
});
// import React,{Component} from "react";
// import {
//   Platform,
//   Dimensions,
//   Linking,
//   StyleSheet,
//   View,
//   Text,
//   TouchableWithoutFeedback,
//   Image
// } from "react-native";
// import MasonryList from "react-native-masonry-list";

// import testData from "./data";

// const deviceHeight = Dimensions.get("window").height;
// const deviceWidth = Dimensions.get("window").width;
// const platform = Platform.OS;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#368FFA"
//   },
//   header: {
//     height: isIPhoneX() ? 74 : 64,
//     backgroundColor: "transparent"
//   },
//   mobileHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   masonryHeader: {
//     position: "absolute",
//     zIndex: 10,
//     flexDirection: "row",
//     padding: 5,
//     alignItems: "center",
//     backgroundColor: "rgba(150,150,150,0.4)"
//   },
//   title: {
//     fontSize: 25
//   },
//   userPic: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     marginRight: 10
//   },
//   userName: {
//     fontSize: 15,
//     color: "#fafafa",
//     fontWeight: "bold"
//   },
//   listTab: {
//     height: 32,
//     flexDirection: "row",
//     borderTopLeftRadius: 7.5,
//     borderTopRightRadius: 7.5,
//     backgroundColor: "#fff",
//     marginBottom: -5
//   },
//   tab: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   tabTextUnderline: {
//     borderBottomWidth: 2,
//     borderBottomColor: "#e53935"
//   },
//   tabTextOn: {
//     fontSize: 10,
//     color: "#e53935"
//   },
//   tabTextOff: {
//     fontSize: 10,
//     color: "grey"
//   }
// });

// function isIPhoneX() {
//   const X_WIDTH = 375;
//   const X_HEIGHT = 812;
//   return (
//     Platform.OS === "ios" &&
//     ((deviceHeight === X_HEIGHT && deviceWidth === X_WIDTH) ||
//       (deviceHeight === X_WIDTH && deviceWidth === X_HEIGHT))
//   );
// }

// export default class Gall extends Component {
//   state = {
//     columns: 2,
//     statusBarPaddingTop: isIPhoneX() ? 30 : platform === "ios" ? 20 : 0
//   };

//   onLayoutChange = ev => {
//     const { width, height } = ev.nativeEvent.layout;
//     let maxComp = Math.max(width, height);

//     if (width >= maxComp) {
//       this.setState({
//         columns: 3,
//         statusBarPaddingTop: 0
//       });
//     } else if (width < maxComp) {
//       this.setState({
//         columns: 2,
//         statusBarPaddingTop: isIPhoneX() ? 30 : platform === "ios" ? 20 : 0
//       });
//     }
//   };

//   render() {
//     const { statusBarPaddingTop } = this.state;

//     return (
//       <View onLayout={ev => this.onLayoutChange(ev)} style={styles.container}>
//         <View style={styles.listTab}>
         
//             <View style={styles.tab}>
//               <View style={[styles.tabTextUnderline, { paddingBottom: 3 }]}>
//                 <Text style={styles.tabTextOn}>PROFESSIONAL</Text>
//               </View>
//             </View>
          
//           <TouchableWithoutFeedback>
//             <View style={styles.tab}>
//               <View style={{ paddingBottom: 3 }}>
//                 <Text style={styles.tabTextOff}>PERSONAL</Text>
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </View>
//         <MasonryList
//           images={testData}
//           columns={this.state.columns}
//           // sorted={true}
//           renderIndividualHeader={data => {
//             return (
//               <TouchableWithoutFeedback
//                // onPress={() => Linking.openURL("https://luehangs.site")}
//               >
//                 <View
//                   style={[
//                     styles.masonryHeader,
//                     {
//                       width: data.masonryDimensions.width,
//                       margin: data.masonryDimensions.gutter / 2
//                     }
//                   ]}
//                 >
//                   {/* <Image
//                     source={{
//                       uri:
//                         "https://luehangs.site/images/lue-hang2018-square.jpg"
//                     }}
//                     style={styles.userPic}
//                   /> */}
//                   <Text style={styles.userName}>{data.title}</Text>
//                 </View>
//               </TouchableWithoutFeedback>
//             );
//           }}
//         />
//       </View>
//     );
//   }
// }

// // import React, { Component } from "react";
// // import { View, Text, StyleSheet } from "react-native";
// // import Icon from "react-native-vector-icons/Entypo";
// // import Gallery from "react-native-image-gallery";

// // import PropTypes from "prop-types";

// // export default class Gall extends Component {
// //   static navigationOptions = {
// //     headerLeft: (
// //       <Icon
// //         style={{ paddingLeft: 10 }}
// //         name="back"
// //         size={30}
// //         color="white"
// //         //  onPress={() =>this.props.navigation.navigate.openDrawer()}
// //         onPress={() => navigate("Home")}
// //       />
// //     ),
// //     headerTitle: "Gallery",
// //     headerRight: null,

// //     headerStyle: {
// //       backgroundColor: "#159B62"
// //     },
// //     headerTintColor: "#fff",
// //     headerTitleStyle: {
// //       fontWeight: "bold",
// //       textAlign: "center"
// //       //flex: 1
// //     }
// //   };
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       index: 0,
// //       images: [
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/1.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/2.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/3.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/4.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/5.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/6.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/7.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },
// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/8.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         },

// //         {
// //           caption: "Michael Conlan",
// //           source: require("../../images/10.jpg"),
// //           dimensions: { width: 540, height: 720 }
// //         }
// //       ]
// //     };
// //     this.onChangeImage = this.onChangeImage.bind(this);

// //     // this.addImages();
// //     // this.removeImages();
// //     // this.removeImage(2, 3000);
// //   }

// //   addImages() {
// //     // Debugging helper : keep adding images at the end of the gallery.
// //     setInterval(() => {
// //       const newArray = [
// //         ...this.state.images,
// //         { source: { uri: "http://i.imgur.com/DYjAHAf.jpg" } }
// //       ];
// //       this.setState({ images: newArray });
// //     }, 5000);
// //   }

// //   removeImage(slideIndex, delay) {
// //     // Debugging helper : remove a given image after some delay.
// //     // Ensure the gallery doesn't crash and the scroll is updated accordingly.
// //     setTimeout(() => {
// //       const newArray = this.state.images.filter(
// //         (element, index) => index !== slideIndex
// //       );
// //       this.setState({ images: newArray });
// //     }, delay);
// //   }

// //   removeImages() {
// //     // Debugging helper : keep removing the last slide of the gallery.
// //     setInterval(() => {
// //       const { images } = this.state;
// //       console.log(images.length);
// //       if (images.length <= 1) {
// //         return;
// //       }
// //       const newArray = this.state.images.filter(
// //         (element, index) => index !== this.state.images.length - 1
// //       );
// //       this.setState({ images: newArray });
// //     }, 2000);
// //   }

// //   onChangeImage(index) {
// //     this.setState({ index });
// //   }

// //   renderError() {
// //     return (
// //       <View
// //         style={{
// //           flex: 1,
// //           backgroundColor: "black",
// //           alignItems: "center",
// //           justifyContent: "center"
// //         }}
// //       >
// //         <Text style={{ color: "white", fontSize: 15, fontStyle: "italic" }}>
// //           This image cannot be displayed...
// //         </Text>
// //         <Text style={{ color: "white", fontSize: 15, fontStyle: "italic" }}>
// //           ... but this is fine :)
// //         </Text>
// //       </View>
// //     );
// //   }

// //   get caption() {
// //     const { images, index } = this.state;
// //     return (
// //       <View
// //         style={{
// //           bottom: 0,
// //           height: 65,
// //           backgroundColor: "rgba(0, 0, 0, 0.7)",
// //           width: "100%",
// //           position: "absolute",
// //           justifyContent: "center"
// //         }}
// //       >
// //         <Text
// //           style={{
// //             textAlign: "center",
// //             color: "white",
// //             fontSize: 15,
// //             fontStyle: "italic"
// //           }}
// //         >
// //           {(images[index] && images[index].caption) || ""}{" "}
// //         </Text>
// //       </View>
// //     );
// //   }

// //   get galleryCount() {
// //     const { index, images } = this.state;
// //     return (
// //       <View
// //         style={{
// //           top: 0,
// //           height: 65,
// //           backgroundColor: "rgba(0, 0, 0, 0.7)",
// //           width: "100%",
// //           position: "absolute",
// //           justifyContent: "center"
// //         }}
// //       >
// //         <Text
// //           style={{
// //             textAlign: "right",
// //             color: "white",
// //             fontSize: 15,
// //             fontStyle: "italic",
// //             paddingRight: "10%"
// //           }}
// //         >
// //           {index + 1} / {images.length}
// //         </Text>
// //       </View>
// //     );
// //   }

// //   render() {
// //     return (
// //       <View style={{ flex: 1 }}>
// //         <Gallery
// //           style={{ flex: 1, backgroundColor: "black" }}
// //           images={this.state.images}
// //           errorComponent={this.renderError}
// //           onPageSelected={this.onChangeImage}
// //           initialPage={0}
// //         />
// //         {this.galleryCount}
// //         {this.caption}
// //       </View>
// //     );
// //   }
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "black"
// //   }
// // });
