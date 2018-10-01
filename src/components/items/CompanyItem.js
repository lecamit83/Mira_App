import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
  View
} from "react-native";
import Communications from "react-native-communications";
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right, 
  Toast
} from "native-base";

import { BORDER_COLOR, BACKGROUND_COLOR_INPUT } from "../../const/Const";
import { ACCESS_TOKEN } from "../../api/access_token";
import { Loading } from "../common/Loading";

// create a component
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  render() {
    const { navigation, itemProps } = this.props;

    return (
      <View style={styles.container}>
        <Loading loading={this.state.loading} size={"large"} />
        <TouchableOpacity
          // style={item}
          style={{ padding: 4 }}
          onPress={() =>
            navigation.navigate("DetailCompany", { itemsProps: itemProps })
          }
        >
          <Card>
            <CardItem>
              <Left>
                <Icon
                  name="contact"
                  style={{
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                />
                <Body>
                  <Text style={styles.nameOfCompany}>
                    {itemProps.useraccount_DVKD}
                  </Text>
                  <Text numberOfLines={1} style={styles.addressOfCompany} note>
                    Địa chỉ: {itemProps.useraccount_diachi}
                  </Text>
                  <Text numberOfLines={1} style={styles.addressOfCompany} note>
                    Mã số thuế: {itemProps.useraccount_masothue}
                  </Text>
                </Body>
              </Left>
              <Right>
                <Button
                  style={styles.button}
                  onPress={() => {
                    Communications.phonecall(itemProps.useraccount_phone, true);
                  }}
                >
                  <Icon name="call" />
                </Button>
                {/* <Button
                  style={styles.button}
                  onPress={() => {
                    // Communications.phonecall(itemProps.useraccount_phone, true);
                  }}
                >
                  <Icon name="chatboxes" />
                </Button> */}
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.openFacebook(
                      itemProps.useraccount_facebook,
                      this.openFBprofile
                    );
                  }}
                >
                  <Icon name="logo-facebook" />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }

  fetch_async = async Uid => {
    let response = await fetch(
      `https://graph.fb.me/${Uid}?access_token=${ACCESS_TOKEN}`
    );
    let data = await response.json();
    return data.id;
  };

  openFBprofile = id => {
    Linking.canOpenURL("fb://profile/" + "sdsadsa")
      .then(support => {
        if (support) {
          Linking.openURL("fb://profile/" + id);
        } else {
          Linking.openURL("https://www.facebook.com/" + id);
        }
        this.setState({ loading: false });
      })
      .catch(err => console.error("An error occurred", err));
  };

  openFacebook(url, cb) {
    if (url !== null) {
      this.setState({ loading: true });
      let arr = url.split("/");
      let arr2 =
        arr[arr.length - 1] !== ""
          ? arr[arr.length - 1].split("=")
          : arr[arr.length - 2].split("=");
      let Uid = arr2[arr2.length - 1];
      this.fetch_async(Uid).then(_fbmyId => {
        cb(_fbmyId);
      });
    } else {
      Toast.show({
        text: "Nhà bán lẻ chưa cung cấp đường dẫn facebook",
        buttonText: "Okay",
        buttonTextStyle: { color: "#008000" },
        buttonStyle: { backgroundColor: "#5cb85c" }
      });
    }
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  button: { margin: 8, backgroundColor: "#019688", width: 50, height: 50 },
  container: {
    flex: 1
  },
  nameOfCompany: {
    fontSize: 19,
   
  },
  addressOfCompany: {
    marginTop: 5,
    fontSize: 10,
    overflow: "scroll",
    opacity: 0.7,
   
  },
  item: {
    margin: 4,
    height: height / 2 + 10,
    width: width / 2 - 8,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR
  },
  image: {
    height: height / 3,
    width: width / 2 - 40,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
    resizeMode: "contain"
  },
  textWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3
  },
  wrap: {
    borderRadius: 5,
    margin: 10,
    backgroundColor: "yellow",
    width: width / 2 - 40,
    alignItems: "center",
    height: 30,
    justifyContent: "center"
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 4,
    resizeMode: "contain"
  },
  buttonAdd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ProductItem;
