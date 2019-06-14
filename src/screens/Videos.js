import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
export const { width, height } = Dimensions.get("window");

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      training: [
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Train.jpg")
        },
        {
          videoId: "1559653301202_Mc.mp4",
          img: require("../../images/Mic1.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic2.jpg")
        },
      ],
      match: [
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Train.jpg")
        },
        {
          videoId: "1559653301202_Mc.mp4",
          img: require("../../images/Mic1.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic2.jpg")
        },
      ],
      gym: [
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Train.jpg")
        },
        {
          videoId: "1559653301202_Mc.mp4",
          img: require("../../images/Mic1.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic2.jpg")
        },
      ],
      exclusive: [
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Train.jpg")
        },
        {
          videoId: "1559653301202_Mc.mp4",
          img: require("../../images/Mic1.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic2.jpg")
        },
      ],


    };
  }

  render() {
    const { training } = this.state;
    const { match } = this.state;
    const { gym } = this.state;
    const { exclusive } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.training}>
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>
                Training Videos
              </Text>
            </View>
            <View>
              <Icon
                name="arrow-right"
                size={30}
                color="white"
                onPress={() => this.props.navigation.navigate("AllVideos")}
              />
            </View>
          </View>

          <View>
            <ScrollView horizontal={true}>
              {training.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.videoId
                      })
                    }
                  >
                    <Image
                      source={ item.img }
                      style={{ height: 120, width: 200, borderRadius: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* {Match Videos} */}
          <View style={styles.training}>
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Match Videos</Text>
            </View>
            <View>
              <Icon
                name="arrow-right"
                size={30}
                color="white"
                // onPress={() =>
                //   Linking.openURL("https://www.youtube.com/watch?v=-2KpoMRb2KA")
                // }
              />
            </View>
          </View>

          {/* {Matches} */}
          <View>
            <ScrollView horizontal={true}>
              {match.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.videoId
                      })
                    }
                  >
                    <Image
                      source={ item.img }
                      style={{ height: 120, width: 200, borderRadius: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* {Gym Session} */}
          <View style={styles.training}>
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>Gym Sessions</Text>
            </View>
            <View>
              <Icon
                name="arrow-right"
                size={30}
                color="white"
                // onPress={() =>
                //   Linking.openURL("https://www.youtube.com/watch?v=-2KpoMRb2KA")
                // }
              />
            </View>
          </View>

          {/* {Gym} */}

          <View>
            <ScrollView horizontal={true}>
              {gym.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.videoId
                      })
                    }
                  >
                    <Image
                      source={ item.img }
                      style={{ height: 120, width: 200, borderRadius: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* {Exclusive Videos} */}

          <View style={styles.training}>
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>
                Exclusive Videos
              </Text>
            </View>
            <View>
              <Icon
                name="arrow-right"
                size={30}
                color="white"
                // onPress={() =>
                //   Linking.openURL("https://www.youtube.com/watch?v=-2KpoMRb2KA")
                // }
              />
            </View>
          </View>

          {/* {Videos} */}

          <View style={{marginBottom:20}}>
            <ScrollView horizontal={true}>
              {exclusive.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.videoId
                      })
                    }
                  >
                    <Image
                      source={ item.img }
                      style={{ height: 120, width: 200, borderRadius: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  training: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
  }
});