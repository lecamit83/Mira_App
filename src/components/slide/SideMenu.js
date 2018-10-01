import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";

import { SafeAreaView } from "react-navigation";
import {
  Content,
  Thumbnail,
  List,
  ListItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import * as CONST from "../../const/Const";
import { connect } from "react-redux";

import deviceStorage from "../../services/deviceStorge";
import { postSignOut, postSignIn } from "../../redux/actions/actionCreators";
class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.deleleJWT = deviceStorage.deleteJWT.bind(this);
    if (this.props.account == null) {
      deviceStorage.loginJWT(this);
    }
  }
  render() {
    const { container, wrapLogo, wrapIndex, item, imageLogo, sign } = styles;
    const { navigation, account } = this.props;

    const LIST_MENU_ITEM = (
      <Content>
        <List>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>DANH MỤC SẢN PHẨM</Text>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("ThuocStack");
              }}
            >
              <Left>
                <Icon name="medical" />
              </Left>
              <Body>
                <Text>Thuốc</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("TPCNStack");
              }}
            >
              <Left>
                <Icon name="medkit" />
              </Left>
              <Body>
                <Text>Thực Phẩm Chức Năng</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("VTYTStack");
              }}
            >
              <Left>
                <Icon name="thermometer" />
              </Left>
              <Body>
                <Text>Vật Tư & Thiết Bị Y Tế</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("MyPhamStack");
              }}
            >
              <Left>
                <Icon name="flower" />
              </Left>
              <Body>
                <Text>Mỹ Phẩm</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>CÔNG TY</Text>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("CompanyStack");
              }}
            >
              <Left>
                <Icon name="search" />
              </Left>
              <Body>
                <Text>Tìm Công Ty</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("CompanyProfileStack");
              }}
            >
              <Left>
                <Icon name="home" />
              </Left>
              <Body>
                <Text>Quản Lí Công Ty</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                this.deleleJWT();
                this.props.dispatch(postSignOut());
              }}
            >
              <Left>
                <Icon name="log-out" />
              </Left>
              <Body>
                <Text>{CONST.SIGN_OUT}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
        </List>
      </Content>
    );
    const LIST_MENU_ITEM_LOGIN = (
      <Content>
        <List>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>DANH MỤC SẢN PHẨM</Text>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("ThuocStack");
              }}
            >
              <Left>
                <Icon name="medical" />
              </Left>
              <Body>
                <Text>Thuốc</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("TPCNStack");
              }}
            >
              <Left>
                <Icon name="medkit" />
              </Left>
              <Body>
                <Text>Thực Phẩm Chức Năng</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("VTYTStack");
              }}
            >
              <Left>
                <Icon name="thermometer" />
              </Left>
              <Body>
                <Text>Vật Tư & Thiết Bị Y Tế</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("MyPhamStack");
              }}
            >
              <Left>
                <Icon name="flower" />
              </Left>
              <Body>
                <Text>Mỹ Phẩm</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>CÔNG TY</Text>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("CompanyStack");
              }}
            >
              <Left>
                <Icon name="search" />
              </Left>
              <Body>
                <Text>Tìm Công Ty</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("SignInStack");
              }}
            >
              <Left>
                <Icon name="log-in" />
              </Left>
              <Body>
                <Text>{CONST.SIGN_IN}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("SignUpStack");
              }}
            >
              <Left>
                <Icon name="add-circle" />
              </Left>
              <Body>
                <Text>{CONST.SIGN_UP}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
        </List>
      </Content>
    );
    var SIDE_MENU = account ? LIST_MENU_ITEM : LIST_MENU_ITEM_LOGIN;
    console.log(account);
    
    return (
      <SafeAreaView style={container}>
        <View style={wrapLogo}>
          <Left>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Thumbnail source={require("../../images/profile.png")} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 17,
                color: "#FFF",
                fontWeight: "bold",
                marginTop: 5,
                marginBottom: 5
              }}
              numberOfLines={1}
            >
              {account && account.useraccount_id > 0 ? account.useraccount_DVKD : null}
            </Text>
            <Text numberOfLines={1} note>
              {account && account.useraccount_id > 0 ? account.useraccount_diachi : null}
            </Text>
          </Body>
        </View>
        <View style={wrapIndex}>{SIDE_MENU}</View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.login.account
  };
}

export default connect(mapStateToProps)(SideMenu);

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  wrapLogo: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER,
    paddingTop: 15,
    padding: 5
  },

  imageLogo: {
    width: (width * 2) / 3,
    height: (((width * 2) / 3) * 66) / 144
  },

  wrapIndex: {
    flex: 8
    // marginLeft: 16,
    // marginRight: 16
  },

  item: {
    backgroundColor: "#FFF",
    height: 48,
    justifyContent: "center"
  },

  sign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  signIn: {
    fontSize: 17
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
