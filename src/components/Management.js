//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  Linking
} from "react-native";

import { connect } from "react-redux";

import {
  Card,
  CardItem,
  ListItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Toast
} from "native-base";

import Communications from "react-native-communications";
import { ACCESS_TOKEN } from "../api/access_token";
import { Loading } from "./common/Loading";
import Header from "./header/CompanyHeader";
import Item from "./items/ProductItem";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_HEADER } from "../const/Const";
import { fetchProductCompany } from "../redux/actions/actionCreators";

// create a component
class Management extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="Thông Tin Công Ty" />
  });
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    let id = this.props.navigation.state.params.itemsProps.useraccount_id;
    this.props.fetchProductCompany(
      "http://api.hifapp.com/api/nbl/product?userid=" + id
    );
  }
  render() {
    const { navigation, companyProduct } = this.props;
    const { itemsProps } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <Loading loading={this.state.loading} size={"large"} />
        <Card style={styles.intro}>
          <View style={styles.wrapInfo}>
            <View style={styles.wrapText}>
              <Text style={styles.nameCompany}>
                {itemsProps.useraccount_DVKD}
              </Text>
              <Text note>{itemsProps.useraccount_diachi}</Text>
            </View>
          </View>
          <CardItem>
            <View style={styles.wrapButton}>
              <Button
                style={{ backgroundColor: "#019688" }}
                onPress={() => {
                  Communications.phonecall(itemsProps.useraccount_phone, true);
                }}
              >
                <Icon name="call" />
              </Button>
              <Button
                style={{ backgroundColor: "#019688" }}
                onPress={() => {
                  this.openFacebook(
                    itemsProps.useraccount_facebook,
                    this.openFBprofile
                  );
                }}
              >
                <Icon name="logo-facebook" />
              </Button>
            </View>
          </CardItem>
        </Card>
        <View style={styles.listItems}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>DANH DÁCH SẢN PHẨM BÁN</Text>
          </ListItem>
          <FlatList
            data={companyProduct}
            renderItem={({ item }) => (
              <Item navigation={navigation} items={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </View>
      </ScrollView>
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
      let arr2 = arr[arr.length - 1].split("=");
      let Uid = arr2[arr2.length - 1];
      this.fetch_async(Uid).then(_fbmyId => {
        cb(_fbmyId);
      });
    } else {
      Toast.show({
        text: "Bạn chưa cung cấp đường dẫn facebook",
        buttonText: "Okay",
        buttonTextStyle: { color: "#008000" },
        buttonStyle: { backgroundColor: "#5cb85c" }
      });
    }
  }
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: BACKGROUND_COLOR
  },
  intro: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 4
  },
  wrapInfo: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    backgroundColor: "#81C784",
    height: 1,
    width: width - 10,
    marginTop: 10,
    marginLeft: 5
  },
  imageLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain"
  },
  wrapText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  icon: {
    height: 35,
    width: 35
    // resizeMode: "contain"
  },
  nameCompany: {
    fontSize: 20,
    color: BACKGROUND_COLOR_HEADER,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: width / 4,
    marginRight: width / 4
  },
  textContact: {
    fontSize: 10
  },
  listItems: {
    // flexWrap: "wrap",
    flex: 1,
    // flexDirection: "row"
    backgroundColor: BACKGROUND_COLOR
  },
  wrapButton: {
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    companyProduct: state.productCompany.proCompany
  };
}
export default connect(
  mapStateToProps,
  { fetchProductCompany }
)(Management);
