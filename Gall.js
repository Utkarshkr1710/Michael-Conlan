import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import Gallery from 'react-native-image-gallery';

import PropTypes from 'prop-types';

export default class Gall extends Component {
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
        headerTitle: "Gallery",
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
      constructor (props) {
        super(props);
        this.state = {
            index: 0,
            images: [
               
               
                { caption: 'Caption 4', source: { uri: 'https://media.gettyimages.com/photos/gold-medalist-michael-conlan-of-northern-ireland-poses-during-the-picture-id453070222?s=2048x2048' } },
                { caption: 'Caption 5', source: { uri: 'https://media.gettyimages.com/photos/michael-conlan-punches-luis-fernando-molina-during-their-bout-at-picture-id889130298?s=2048x2048' } },
                { caption: 'Caption 6', source: { uri: 'http://www2.pictures.zimbio.com/gi/Michael+Conlan+AsESbngsmKTm.jpg' } },
                { caption: 'Caption 7', source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } },
                { caption: 'Caption 8', source: { uri: 'http://i.imgur.com/BN8RVGa.jpg' } },
                { caption: 'Caption 9', source: { uri: 'http://i.imgur.com/jXbhTbv.jpg' } },
                { caption: 'Caption 10', source: { uri: 'http://i.imgur.com/30s12Qj.jpg' } },
                { caption: 'Caption 11', source: { uri: 'http://i.imgur.com/4A1Q49y.jpg' } },
                { caption: 'Caption 12', source: { uri: 'http://i.imgur.com/JfVDTF9.jpg' } },
                { caption: 'Caption 13', source: { uri: 'http://i.imgur.com/Vv4bmwR.jpg' } }
            ]
        };
        this.onChangeImage = this.onChangeImage.bind(this);

        // this.addImages();
        // this.removeImages();
        // this.removeImage(2, 3000);
    }

    addImages () {
        // Debugging helper : keep adding images at the end of the gallery.
        setInterval(() => {
            const newArray = [...this.state.images, { source: { uri: 'http://i.imgur.com/DYjAHAf.jpg' } }];
            this.setState({ images: newArray });
        }, 5000);
    }

    removeImage (slideIndex, delay) {
        // Debugging helper : remove a given image after some delay.
        // Ensure the gallery doesn't crash and the scroll is updated accordingly.
        setTimeout(() => {
            const newArray = this.state.images.filter((element, index) => index !== slideIndex);
            this.setState({ images: newArray });
        }, delay);
    }

    removeImages () {
        // Debugging helper : keep removing the last slide of the gallery.
        setInterval(() => {
            const { images } = this.state;
            console.log(images.length);
            if (images.length <= 1) {
                return;
            }
            const newArray = this.state.images.filter((element, index) => index !== this.state.images.length - 1);
            this.setState({ images: newArray });
        }, 2000);
    }

    onChangeImage (index) {
        this.setState({ index });
    }

    renderError () {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                 <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>This image cannot be displayed...</Text>
                 <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>... but this is fine :)</Text>
            </View>
        );
    }

    get caption () {
        const { images, index } = this.state;
        return (
            <View style={{ bottom: 0, height: 65, backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic' }}>{ (images[index] && images[index].caption) || '' } </Text>
            </View>
        );
    }

    get galleryCount () {
        const { index, images } = this.state;
        return (
            <View style={{ top: 0, height: 65, backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'right', color: 'white', fontSize: 15, fontStyle: 'italic', paddingRight: '10%' }}>{ index + 1 } / { images.length }</Text>
            </View>
        );
    }

    render () {
        return (
            <View style={{ flex: 1 }} >
                <Gallery
                  style={{flex: 1, backgroundColor: '#696969'}}
                  images={this.state.images}
                  errorComponent={this.renderError}
                  onPageSelected={this.onChangeImage}
                  initialPage={0}
                />
                { this.galleryCount }
                { this.caption }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    }
  });
