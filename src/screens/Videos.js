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
import { connect } from "react-redux";
export const { width, height } = Dimensions.get("window");

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { videoData } = this.props;

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
                onPress={() => this.props.navigation.navigate("AllVideos", { category: 'training' })}
              />
            </View>
          </View>

          <View>
            <ScrollView horizontal={true}>
              {videoData.training.video.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.url, category: 'training'
                      })
                    }
                  >
                    <Image
                      source={{
                        uri: `https://img.youtube.com/vi/${
                          item.url
                        }/mqdefault.jpg`
                      }}
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
                onPress={() => this.props.navigation.navigate("AllVideos", { category: 'match' })}
              />
            </View>
          </View>

          {/* {Matches} */}
          <View>
            <ScrollView horizontal={true}>
              {videoData.match.video.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.url, category: 'match'
                      })
                    }
                  >
                    <Image
                      source={{
                        uri: `https://img.youtube.com/vi/${
                          item.url
                        }/hqdefault.jpg`
                      }}
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
                onPress={() => this.props.navigation.navigate("AllVideos", { category: 'gym' })}
              />
            </View>
          </View>

          {/* {Gym} */}

          <View>
            <ScrollView horizontal={true}>
              {videoData.gym.video.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.url, category: 'gym'
                      })
                    }
                  >
                    <Image
                      source={{
                        uri: `https://img.youtube.com/vi/${
                          item.url
                        }/hqdefault.jpg`
                      }}
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
                onPress={() => this.props.navigation.navigate("AllVideos", { category: 'exclusive' })}
              />
            </View>
          </View>

          {/* {Videos} */}

          <View style={{ marginBottom: 20 }}>
            <ScrollView horizontal={true}>
              {videoData.exclusive.video.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.url, category: 'exclusive'
                      })
                    }
                  >
                    <Image
                      source={{
                        uri: `https://img.youtube.com/vi/${
                          item.url
                        }/hqdefault.jpg`
                      }}
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

function mapStateToProps(state) {
  return {
    sliderData: state.sliderData.data,
    nextMatchData: state.nextMatchData.data,
    videoData: state.videoData
  };
}

export default connect(mapStateToProps)(Videos);
