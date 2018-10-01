//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions
} from "react-native";

import { COLOR_APP_BACKGROUND, BORDER_COLOR } from "../../const/Const";
// create a component
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  render() {
    return (
      <View style={styles.wrapperHorizontal}>
        <TextInput
          style={styles.inputData}
          placeholder={this.props.placeholder}
          underlineColorAndroid="transparent" // ios không hỗ trợ
          secureTextEntry={this.props.secure}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  wrapperHorizontal: {
    marginTop: 5,
    margin: 5,
    flexDirection: "row",
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
  },
  inputData: {
    flex: 1,
    fontSize: 15
  }
});

//make this component available to the app
export default UserInput;
