import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

import { Card, CardItem, Text, Toast } from "native-base";
import { connect } from "react-redux";

import {
  BORDER_COLOR,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR_HEADER
} from "../../const/Const";
import { deleteProductOfCompany } from "../../redux/actions/actionCreators";

// create a component
class SubItem extends Component {
  render() {
    const {
      navigation,
      items,
      account,
      index,
      companyProfileInstance
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("DetailsScreen", {
            items: items,
            isSaled: true,
            instance: companyProfileInstance,
            index: index
          })
        }
      >
        <Card style={styles.item}>
          <CardItem style={styles.headerItem}>
            <Text numberOfLines={1} style={styles.headerItemText}>
              {items.product_name}
            </Text>
          </CardItem>
          <CardItem>
            <View style={styles.line} />
          </CardItem>
          <CardItem style={{ justifyContent: "center" }}>
            <Image style={styles.image} source={{ uri: items.product_image }} />
          </CardItem>
          <CardItem style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MapScreen", {listAccount : items.listAccount});
              }}
            >
              <View style={styles.buttonLeft}>
                <Image
                  style={styles.icon}
                  source={require("../../images/directions_black.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                companyProfileInstance.state.arrProducts.splice(index, 1);
                companyProfileInstance.setState({
                  arrProducts: companyProfileInstance.state.arrProducts
                });
                var data = {
                  product_id: items.product_id,
                  useraccount_id: account.useraccount_id
                };
                this.props.deleteProductOfCompany(
                  data,
                  companyProfileInstance.state.arrProducts
                );
              }}
            >
              <View style={styles.buttonRight}>
                <Image
                  style={styles.icon}
                  source={require("../../images/remove_from_company_white.png")}
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
    alignItems: "center"
  },
  item: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderRadius: 4,
    borderColor: BORDER_COLOR,
    marginHorizontal: 4
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
    width: "100%"
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
    margin: 4
  },
  buttonLeft: {
    width: width / 5,
    alignItems: "flex-start"
  },
  buttonRight: {
    width: width / 5,
    alignItems: "flex-end"
  }
});

function mapStateToProps(state) {
  return {
    account: state.login.account
  };
}

export default connect(
  mapStateToProps,
  { deleteProductOfCompany }
)(SubItem);
