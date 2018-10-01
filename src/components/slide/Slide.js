//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// create a component
class Slide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.uri} style={styles.image} />
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  container: {
    height: height * 4 / 10,
    flex: width,
  },
  image: {
    height: height * 4 / 10,
    flex: width,
    resizeMode: "cover"
  }
});

//make this component available to the app
export default Slide;
