import React, { Component } from 'react';
import { View, Text ,StyleSheet,ImageBackground,Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
export const { width, height } = Dimensions.get("window");

export default class About extends Component {
    static navigationOptions = {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            name="back"
            size={30}
            color="white"
            onPress={() => navigate.openDrawer()}
          />
        ),
        headerTitle: "Michael Conlan",
    
        headerStyle: {
          backgroundColor: "#159B62"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center"
          //flex: 1
        }
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <View style={styles.container}>

        <View>
        <ImageBackground source={require('./images/Stat.jpg')} style={{width: '100%', height: '75%'}}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
     <Text style={{color:'white',fontSize:22}}>World Champion</Text>
   </View>
</ImageBackground>
        </View>

        <View>
        </View>
     </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    videos: {
      flex: 1,
      flexDirection: "row"
    }
  });