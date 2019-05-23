import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import FadingSlides from 'react-native-fading-slides';
const { width, height } = Dimensions.get('window');
import SplashSreen from "./SplashSreen"


const slides = [
  {
    image: require('./Pics/img_four.jpg'),
    imageWidth: width - width * 0.0,
    imageHeight: width - width * 0.3,
    title: 'Michael Conlan',
   //subtitle: 'This is a see you soon',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
  {
    image: require('./Pics/img_one.jpg'),
    imageWidth: width - width * 0.0,
    imageHeight: width - width * 0.3,
    title: 'Michael Conlan',
    //subtitle: 'This is a see you soon',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
  {
    image: require('./Pics/img_six.jpg'),
    imageWidth: width - width * 0.0,
    imageHeight: width - width * 0.3,
    title: 'Michael Conlan',
    //subtitle: 'This is a see you soon',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
  {
    image: require('./Pics/img_two.jpg'),
    imageWidth: width - width * 0.0,
    imageHeight: width - width * 0.3,
    title: 'Michael Conlan',
    //subtitle: 'This is a see you soon',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading:true,
    };
  }
  componentWillUnmount(){
    
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };
  async componentDidMount() {
    
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashSreen />;
    }
    return (
      <View style={styles.container}>
      <FadingSlides
        slides={slides}
        fadeDuration={1200}
        stillDuration={2000}
        height={800}
        startAnimation={true}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    backgroundColor: 'black',
  },
});
