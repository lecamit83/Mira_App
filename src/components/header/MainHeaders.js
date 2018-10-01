//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

import { Card, CardItem, Text, Icon, Right } from "native-base";

import * as CONST from "../../const/Const.js";
// import * as STYLES from "../../const/Styles.js";
import AddThuoc from "../AddThuoc.js";
import AddTPCN from "../AddTPCN.js";
import AddVTandTBYT from "../AddVTandTBYT.js";
import AddMyPham from "../AddMyPham.js";

// create a component
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  render() {
    const { navigation } = this.props;
    const instance = navigation.getParam("instance");
    const { query } = this.state;
    const {
      wrapMenu,
      iconMenu,
      iconSettings,
      container,
      wrapperSearch,
      iconSearch,
      inputText,
      containerAll
    } = styles;
    const MENUJSX = (
      <Menu>
        <MenuTrigger>
          <Image
            style={iconSettings}
            source={require("../../images/news_add_white.png")}
          />
        </MenuTrigger>
        <MenuOptions customStyles={optionsStyles}>
          <Card>
            <CardItem
              header
              style={{ backgroundColor: CONST.BACKGROUND_COLOR_HEADER }}
            >
              <Text style={{ fontSize: 17, color: "#FFF" }}>Thêm Mới</Text>
            </CardItem>
            <MenuOption
              onSelect={() => {
                navigation.navigate("AddThuoc");
              }}
            >
              <CardItem bordered>
                <Icon active name="medical" />
                <Text>Thuốc</Text>
              </CardItem>
            </MenuOption>
            <MenuOption
              onSelect={() => {
                navigation.navigate("AddTPCN");
              }}
            >
              <CardItem bordered>
                <Icon active name="medkit" />
                <Text>Thực Phẩm Chức Năng</Text>
              </CardItem>
            </MenuOption>
            <MenuOption
              onSelect={() => {
                navigation.navigate("AddVTandTBYT");
              }}
            >
              <CardItem bordered>
                <Icon active name="cog" />
                <Text>Vật Tư & Thiết Bị Y Tế</Text>
              </CardItem>
            </MenuOption>
            <MenuOption
              onSelect={() => {
                navigation.navigate("AddMyPham");
              }}
            >
              <CardItem bordered>
                <Icon active name="color-filter" />
                <Text>Mỹ Phẩm</Text>
              </CardItem>
            </MenuOption>
          </Card>
        </MenuOptions>
      </Menu>
    );

    return (
      <View>
        <StatusBar
          style={{
            height: Platform.OS === "ios" ? 20 : 0,
            backgroundColor: CONST.BACKGROUND_COLOR_HEADER
          }}
        />
        <View style={container}>
          <View style={wrapMenu}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DrawerOpen");
              }}
              onPressOut={Keyboard.dismiss}
            >
              <Image
                source={require("../../images/menu_white.png")}
                style={iconMenu}
              />
            </TouchableOpacity>
          </View>
          <View style={wrapperSearch}>
            <TextInput
              placeholder={this.props.placeHolder || "Nhập tên sản phẩm ..."}
              underlineColorAndroid="transparent"
              style={inputText}
              value={query}
              onChangeText={text => {
                this.setState({ query: text });
                instance.setState({ query: text });
              }}
            />
            <TouchableOpacity onPressIn={Keyboard.dismiss}>
              <Image
                source={require("../../images/search_black.png")}
                style={iconSearch}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const optionsStyles = {
  optionsContainer: {
    borderColor: CONST.BORDER_COLOR,
    borderWidth: 1,
    width: 250
  }
};

const { height, width } = Dimensions.get("screen");

// define your styles
const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER
  },

  container: {
    height: CONST.HEADER_HEIGHT,
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER,
    flexDirection: "row",
    alignItems: "center"
  },

  iconSearch: {
    height: 30,
    width: 30
  },

  inputText: {
    fontSize: 18,
    flex: 1,
    height: 40,
  },

  item: {
    padding: 0
  },
  wrapTextInput: {
    alignItems: "center"
  },
  wrapperSearch: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    height: 40,
    backgroundColor: CONST.BACKGROUND_COLOR_INPUT,
    borderColor: CONST.BORDER_COLOR,
    flex: 1,
    marginHorizontal: 5
  },

  wrapMenu: {
    height: 30,
    width: 46
  },

  iconMenu: {
    height: 30,
    width: 30,
    marginLeft: 11,
    marginRight: 5
  },

  wrapSettings: {
    height: 30,
    width: 40
  },

  iconSettings: {
    height: 30,
    width: 30,
    marginLeft: 4
  },

  line: { backgroundColor: CONST.LINE, height: 1, opacity: 0.6 },

  index: { flexDirection: "row" },

  wrapImage: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: { height: 20, width: 20, resizeMode: "contain", opacity: 0.6 },
  wrapText: { marginLeft: 16, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 16 }
});

function mapStateToProps(state) {
  return {};
}
//make this component available to the app
export default connect(mapStateToProps)(MainHeader);
