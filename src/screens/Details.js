import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

export default class RCTYouTubeExample extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: false,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: true,
    containerMounted: false,
    containerWidth: null,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        onLayout={({ nativeEvent: { layout: { width } } }) => {
          if (!this.state.containerMounted) this.setState({ containerMounted: true });
          if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
        }}
      >
       
        {this.state.containerMounted && (
          <YouTube
            ref={component => {
              this._youTubeRef = component;
            }}
            // You must have an API Key for the player to load in Android
            apiKey="AIzaSyDzFa-lZN3AqogAa_EndIXWg6CNSR7Agyo"
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            videoId="tlxOGZMZ_Bc"
            // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
            // playlistId="PLF797E961509B4EB5"
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)) },
              styles.player,
            ]}
            onError={e => this.setState({ error: e.error })}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
            onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
          />
        )}

      
     
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});

// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   ScrollView,
//   Image
// } from "react-native";
// import Icon from "react-native-vector-icons/Entypo";
// import SwiperFlatList from "react-native-swiper-flatlist";
// //export const { width, height } = Dimensions.get("window");

// export default class Details extends Component {
//   static navigationOptions = {
//     headerLeft: (
//       <Icon
//         style={{ paddingLeft: 10 }}
//         name="back"
//         size={30}
//         color="white"
// //        onPress={() => navigate.openDrawer()}
//         onPress={() =>this.props.navigation.navigate("Details")}

//       />
//     ),
//     headerTitle: "Matches",
//     headerRight: null,

//     headerStyle: {
//       backgroundColor: "#159B62"
//     },
//     headerTintColor: "#fff",
//     headerTitleStyle: {
//       fontWeight: "bold",
//       textAlign: "center"
//       //flex: 1
//     }
//   };
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView>
//           <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <Image
//               source={require("./images/9.jpg")}
//               style={{
//                 flex: 1,
//                 width: "100%",
//                 height: 280
//                 //resizeMode: "cover"
//               }}
//             />
//           </View>

//           <View style={{ margin: 20, marginTop: 40 }}>
//             <Text style={{ color: "white", fontSize: 20 }}>Schedule Date and Timing:</Text>
//           </View>

//           <View style={{ margin: 20, marginTop: 40 }}>
//             <Text style={{ color: "white", fontSize: 20 }}>Head To Head:</Text>
//           </View>


              
//           <View
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: 20
//             }}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: "#159B62",
//                 width: "90%",
//                 justifyContent: "center",
//                 alignItems: "center"
//               }}
//             >
//               <Text style={{ color: "white", fontSize: 22,fontWeight:'bold' ,fontFamily:'monospace'}}>ABOUT</Text>
//             </View>
//           </View>

//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               margin: 20,
//               marginTop:10
//             }}
//           >
//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>5 ft 7 in</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>Height</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>5 ft 7 in</Text>
//             </View>
//           </View>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               margin: 20,
//               marginTop:10
//             }}
//           >
//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>57 Kg</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>Weight</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>57 Kg</Text>
//             </View>
//           </View>

//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               margin: 20,
//               marginTop:10
//             }}
//           >
//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>175 cm</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>Reach</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>175 cm</Text>
//             </View>
//           </View>

//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               margin: 20,
//               marginTop:10
//             }}
//           >
//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>Orthodox</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>Stance</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>Orthodox</Text>
//             </View>
//           </View>

//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               margin: 20,
//               marginTop:10
//             }}
//           >
//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>6 KO</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>Record</Text>
//             </View>

//             <View>
//               <Text style={{ color: "white", fontSize: 20 }}>6 KO</Text>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// export const { width, height } = Dimensions.get("window");

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black"
//   },
//   child: {
//     height: height * 0.4,
//     width,
//     justifyContent: "center"
//   },
//   text: {
//     fontSize: 40,
//     textAlign: "center"
//   }
// });
