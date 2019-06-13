import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";
export const { width, height } = Dimensions.get("window");

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cap: [
        { img: require('./images/cap.webp'), des: "Cap" ,buy:'View Details',Price:'$4'},
        { img: require('./images/Tshirt.webp'), des: "T-shirt",buy:'View Details',Price:'$4' },
        { img: require('./images/Gloves.webp'), des: "Gloves",buy:'View Details' ,Price:'$4'},
        { img: require('./images/cap.webp'), des: "Cap",buy:'View Details' ,Price:'$4'},
        { img: require('./images/cap.webp'), des: "Cap",buy:'View Details' ,Price:'$4'}
      ]
    };
  }
  // const Cap= [{img: '', des: ''}, ]

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1,elevation:10 }}>
            {this.state.cap.map((item, i) => (
              <View
                style={{
                  height: 80,
                  width: "90%",
                  backgroundColor: "white",
                  borderRadius: 40,
                  marginLeft: "5%",
                  marginTop: 30,
                  elevation:10,
                  
                
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent:'space-between'
                  }}
                >
                  <View style={{ marginLeft: "5%" }}>
                    <Image
                      source={item.img}
                      style={{ height: 70, width: 70, borderRadius: 35 }}
                    />
                    </View>
                    <View style={{marginRight:'10%'}}>
                      <Text style={{color:'black',fontSize:20,}}>{item.des}</Text>
                    </View>
                    <View style={{marginRight:'10%'}}>
                      <Text style={{color:'black',fontSize: 20,}}>{item.Price}</Text>
                    </View>
                    {/* <TouchableWithoutFeedback onPress={() => navigate("ProductDetails")}> */}
                    <TouchableWithoutFeedback >
                    <View style={{marginRight:'10%'}}>
                      <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>{item.buy}</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width:'100%',
    backgroundColor: "black"
  }
});
