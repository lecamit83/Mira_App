//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";

import { connect } from "react-redux";

import {
  Content,
  Form,
  ListItem,
  Item,
  Text,
  Label,
  Input,
  Button,
  Toast
} from "native-base";

import Header from "./header/CompanyHeader";
import ItemCompanyProduct from "./items/SubItem";

import { Loading } from "./common/Loading";

import { BACKGROUND_COLOR, BACKGROUND_COLOR_HEADER } from "../const/Const";
import { fetchProductCompany,updateData } from "../redux/actions/actionCreators";
import {DIA_CHI, SO_DIEN_THOAI} from "../const/Const";

// create a component
class CompanyProfiles extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        navigation={navigation}
        title="Thông Tin Công Ty"
        Goto="MainStack"
      />
    )
  });
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      useraccount_diachi : "",
      phoneNumber : "",
      linkFacebook : "",
      useraccount_location : "",
    };
  }
  componentDidMount() {
    let id = this.props.account.useraccount_id;
    this.props.fetchProductCompany(
      "http://api.hifapp.com/api/nbl/product?userid=" + id
    );
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.arrProducts !== nextProps.companyProduct) {
      this.setState({ arrProducts: nextProps.companyProduct });
    }
  }
  isFullField = (user) => {
    if(user.useraccount_diachi === "" || user.useraccount_phone === "" || user.useraccount_facebook === "" || user.useraccount_location === "") {
      Toast.show({
        text: "Bạn cần nhập đủ các mục!",
        buttonText: "Okay",
        buttonTextStyle: { color: "#008000" },
        buttonStyle: { backgroundColor: "#5cb85c" }
      });
      return false;
    }
    return true;
  }
  render() {
    const { navigation, companyProduct, account } = this.props;
    const { arrProducts } = this.state;
    console.log(account);
    
    return (
      <ScrollView>
        <Loading size="large" loading={this.state.loading} />
        <Content
          style={{ marginLeft: 15, marginRight: 15, alignContent: "center" }}
        >
          <Form>
            <Item floatingLabel last>
              <Label>{DIA_CHI}</Label>
              <Input
                onTouchStart={() => {
                  navigation.navigate("CheckIn", { instance: this });
                }}
                returnKeyType="done"
                value={this.state.useraccount_diachi}
                numberOfLines={3}
                flexWrap="wrap"
                onSubmitEditing={() => {
                  console.log("DIA CHI");
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>{SO_DIEN_THOAI}</Label>
              <Input
                onChangeText={phoneNumber => this.setState({phoneNumber})}
                numberOfLines={1}
                returnKeyType="next"
                keyboardType="phone-pad"
              />
            </Item>
            <Item floatingLabel>
              <Label>Facebook</Label>
              <Input 
                onChangeText={linkFacebook => this.setState({linkFacebook})}
                numberOfLines={1}
                returnKeyType="done"
              />
            </Item>
            <Button full info style={styles.button} onPress={()=>{
              //this.setState({ loading: true });
              var user = {
                useraccount_diachi: this.state.useraccount_diachi,
                useraccount_phone: this.state.phoneNumber,
                useraccount_facebook : this.state.linkFacebook,
                useraccount_location : this.state.useraccount_location,
              };
              console.log(user);
              if(this.isFullField(user)) {
                this.props.updateData(user , account.useraccount_id);
              }

            }}>
              <Text>CẬP NHẬT</Text>
            </Button>
          </Form>
        </Content>
        <View style={styles.listItems}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>DANH DÁCH SẢN PHẨM BÁN</Text>
          </ListItem>
          <FlatList
            data={arrProducts}
            renderItem={({ item, index }) => (
              <ItemCompanyProduct
                navigation={navigation}
                items={item}
                index={index}
                companyProfileInstance={this}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            extraData={this.state}
          />
        </View>
      </ScrollView>
    );
  }
  // sai?
  
  
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  button: {
    margin: 15,
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: BACKGROUND_COLOR_HEADER
  },
  container: {
    flex: 1
    // backgroundColor: BACKGROUND_COLOR
  },
  intro: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginLeft: 5,
    marginRight: 5
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
    fontSize: 17,
    color: BACKGROUND_COLOR_HEADER,
    fontWeight: "bold",
    marginBottom: 5
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
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    companyProduct: state.productCompany.proCompany,
    account: state.login.account
  };
}
export default connect(
  mapStateToProps,
  { fetchProductCompany, updateData }
)(CompanyProfiles);
