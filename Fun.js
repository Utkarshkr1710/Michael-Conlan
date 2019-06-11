import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import SwiperFlatList from "react-native-swiper-flatlist";
//export const { width, height } = Dimensions.get("window");
import CardView from 'react-native-cardview' ;

export default class Details extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="back"
        size={30}
        color="white"
              //  onPress={() =>this.props.navigation.navigate.openDrawer()}
        onPress={() => navigate("Home")}
      />
    ),
    headerTitle: "Fun Facts",
    headerRight: null,

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
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
         


        </ScrollView>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  child: {
    height: height * 0.4,
    width,
    justifyContent: "center"
  },
  text: {
    fontSize: 40,
    textAlign: "center"
  },
  MainContainer: {
 
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
 
  cardViewStyle:{
 
    width: 250, 
    height: 150,
 
  },
 
  cardView_InsideText:{
 
    fontSize: 20, 
    color: '#000', 
    textAlign: 'center', 
    marginTop: 50    
 
  }
});
