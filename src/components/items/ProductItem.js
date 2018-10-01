import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import { Card, CardItem, Text, Toast } from "native-base";

import {
  BORDER_COLOR,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR_HEADER
} from "../../const/Const";
import { connect } from "react-redux";
import { addProduct } from "../../api/postData";

// create a component
class ProductItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, line, image, info, wrap, icon, buttonAdd, textWrap } = styles;
    const { navigation, items, account } = this.props;

    let useraccount_id = account ? account.useraccount_id : null;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("DetailsScreen", { items: items, isSaled: false })
        }
      >
        <Card style={item}>
          <CardItem header style={styles.headerItem}>
            <Text numberOfLines={1} style={styles.headerItemText}>
              {items.product_name}
            </Text>
          </CardItem>
          <CardItem>
            <View style={line} />
          </CardItem>
          <CardItem style={{justifyContent: 'center',}} >
            <Image style={styles.image} source={{ uri: items.product_image }} />
          </CardItem>
          <CardItem footer style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MapScreen", {listAccount : items.listAccount});
              }}
            >
              <View style={styles.buttonLeft}>
                <Image
                  style={icon}
                  source={require("../../images/directions_black.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                var data = {
                  product_id: items.product_id,
                  useraccount_id: useraccount_id
                };
                addProduct(data)
                  .then(resJSON => {
                    Toast.show({
                      text: resJSON.message,
                      buttonText: "Okay",
                      buttonTextStyle: { color: "#008000" },
                      buttonStyle: { backgroundColor: "#5cb85c" }
                    });
                  })
                  .catch(err => console.log(err));
              }}
            >
              <View style={styles.buttonRight}>
                <Image
                  style={icon}
                  source={require("../../images/add_to_company_white.png")}
                />
              </View>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 4,
  },
  item: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderColor: BORDER_COLOR,
  },
  headerItemText: {
    color: "black",
    fontWeight: "bold",
    overflow: "scroll"
  },
  line: {
    backgroundColor: BACKGROUND_COLOR_HEADER,
    height: 1,
    width: "100%",
    opacity: 1,
    backgroundColor: "#EBEBEB",
    alignSelf: "center"
  },

  image: {
    aspectRatio: 1,
    width : "100%",
  },

  textWrap: {
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    height: 30,
    width: 30
  },

  headerItem: {
    height: 40
  },
  button: {
    backgroundColor: BACKGROUND_COLOR_HEADER,
    height: 40,
    justifyContent: "space-between",
    margin: 2,
  },
  buttonLeft: {
    width: width / 6,
    alignItems: "flex-start",
  },
  buttonRight: {
    width: width / 6,
    alignItems: "flex-end",
  }
});

function mapStateToProps(state) {
  return {
    account: state.login.account
  };
}
export default connect(mapStateToProps)(ProductItem);
