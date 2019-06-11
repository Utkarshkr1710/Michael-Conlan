import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Button } from "react-native-elements";
import { Mic1, Mic2, Mic3, Mic4, Mic5, new_gall_two } from "./images";
const newImage = [new_gall_two];

const image = index => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));
export default class ProductDetails extends Component {
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
    headerTitle: "Product Details",
    headerRight: (
      <Icon
        style={{ paddingRight: 10 }}
        name="shopping-cart"
        size={30}
        color="white"
        onPress={() => navigation.navigate("Cart")}
      />
    ),

    headerStyle: {
      backgroundColor: "#ffaa3e"
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
    this.state = { count: 0, expanded: false };
  }
  _incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  _decrementCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      expanded: !this.state.expanded,
      airQuaIco: !this.state.airQuaIco
    });
  };

  renderItemComponent = ({ item }) => (
    <View>
      <Image
        style={styles.image}
        source={item.image}
        // resizeMode={Image.resizeMode.cover}
      />
    </View>
  );
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            index={3}
            autoplayLoop
            data={items}
            renderItem={this.renderItemComponent}
            showPagination
          />

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 22 }}>MC Cap</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "red", fontSize: 22 }}>$10</Text>
          </View>

          <View style={{ justifyContent:'center',alignItems:'center' }}>
            <Text style={{ color: "black", fontSize: 22 }}>Choose Color</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop:10
            }}
          >
            <View style={{ height: 30, width: 30, backgroundColor: "red",borderRadius:10 }} />
            <View style={{ height: 30, width: 30, backgroundColor: "brown",borderRadius:10  }} />
            <View style={{ height: 30, width: 30, backgroundColor: "black",borderRadius:10 }} />
            <View
              style={{ height: 30, width: 30, backgroundColor: "skyblue",borderRadius:10 }}
            />
            <View style={{ height: 30, width: 30, backgroundColor: "blue",borderRadius:10 }} />
            <View style={{ height: 30, width: 30, backgroundColor: "green",borderRadius:10 }} />
          </View>


          <View style={{width:'100%',height:120,backgroundColor:'#E0E0E0',marginTop:20}}>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={{ padding: 20 }}>
              <Text style={{ color: "black", fontSize: 22 }}>Size</Text>
            </View>

            <TouchableWithoutFeedback>
            <View style={{ padding: 20 }}>
              <Text style={{ color: "skyblues", fontSize: 22 }}>
                 Size Chart
              </Text>
            </View>
            </TouchableWithoutFeedback>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <View
              style={{
                height: 30,
                width: 50,
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                S
              </Text>
            </View>
            <View
              style={{
                height: 30,
                width: 50,
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                M
              </Text>
            </View>
            <View
              style={{
                height: 30,
                width: 50,
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                L
              </Text>
            </View>
            <View
              style={{
                height: 30,
                width: 50,
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                XL
              </Text>
            </View>
            <View
              style={{
                height: 30,
                width: 50,
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                XXL
              </Text>
            </View>
          </View>

          </View>
         

          {/* <View style ={{padding:20}}>
            <Text style={{ color: "black", fontSize: 22 }}>Quantity</Text>
            </View> */}

          {/* <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

              <TouchableWithoutFeedback  onPress={ () => this._decrementCount()}>
              <View style={{height:30,width:30,borderColor:'black',borderWidth:1}}>
                <Text style={{fontSize:20,textAlign:'center',color:'black',fontWeight:'bold'}}>-</Text>
            </View>
              </TouchableWithoutFeedback>

              <View style={{height:30,width:50,borderWidth:1,borderColor:'black'}}>
              <Text style={{textAlign:'center',fontSize:20,}}>{this.state.count}</Text>
              </View>

              <TouchableWithoutFeedback onPress={ () => this. _incrementCount()}>
              <View style={{height:30,width:30,borderColor:'black',borderWidth:1}}>
                <Text style={{fontSize:20,textAlign:'center',color:'black',fontWeight:'bold'}}>+</Text>
              </View>
              </TouchableWithoutFeedback>

             </View> */}

          <View style={{ padding: 20, marginTop: 20 }}>
            <Button
              icon={{
                name: "shopping-cart",
                type: "entypo",
                color: "white",
                size: 30
              }}
              buttonStyle={{
                backgroundColor: "#159B62"
              }}
              onPress={() => alert("Added to cart")}
              title="ADD TO CART"
            />
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#E0E0E0",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical:10
            }}
          >
            <View style={{ padding: 20 }}>
              <Text style={{ color: "black", fontSize: 22 }}>Product Details</Text>
            </View>
            <View>
              {this.state.airQuaIco ? (
                <Icon
                  style={{ paddingRight: 20 }}
                  name="arrow-with-circle-up"    
                  size={30}
                  color="black"
                  onPress={this.changeLayout}
                />
              ) : (
                <Icon
                  style={{ paddingRight: 20 }}
                  name="arrow-with-circle-down"
                  size={30}
                  color="black"
                  onPress={this.changeLayout}
                />
              )}
            </View>
          </View>
          <View
            style={{
              height: this.state.expanded ? null : 0,
              overflow: "hidden",
              backgroundColor: "#E0E0E0"
            }}
          >
            <View style={{ padding: 20 }}>
              <Text style={{ color: "black", fontSize: 20 }}>
                Style Information:
              </Text>
            </View>

            <View style={{ padding: 20 }}>
              <Text style={{ color: "black", fontSize: 20 }}>Material:</Text>
            </View>

            <View style={{ padding: 20 }}>
              <Text style={{ color: "black", fontSize: 20 }}>
                **Measurement**
              </Text>
            </View>

            <View style={{ padding: 20 }}>
              <Text style={{ color: "black", fontSize: 20 }}>
                Return Policy:
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
  image: {
    height: height * 0.5,
    width
  }
});
