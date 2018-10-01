//import liraries
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Modal,
  TouchableHighlight,
  Linking
} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Form,
  Item,
  Button,
  Input,
  Label,
  Icon,
  View,
  Picker,
  Toast,
  Textarea,
  Card,
  CardItem,
  Body
} from "native-base";
import ModalBox from "react-native-modalbox";

import Header from "./header/CompanyHeader";
import {
  PASSWORD,
  PASSWORD_AGAIN,
  HO_TEN,
  DON_VI,
  MA_SO_THUE,
  SO_DIEN_THOAI,
  SIGN_UP,
  BACKGROUND_COLOR_HEADER,
  DIA_CHI,
  CHECK_IN,
  FB_URL
} from "../const/Const";
import { signUp } from "../redux/actions/actionCreators";

import Communications from "react-native-communications";
// create a component
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useraccount_DVKD: "",
      useraccount_fullname: "",
      useraccount_masothue: "",
      useraccount_phone: "",
      useraccount_diachi: "",
      useraccount_password: "",
      passwordAgain: "",
      useraccount_location: "",
      fb_url: ""
    };
  }

  render() {
    const { navigation, Goto } = this.props;
    const { wrapInput } = styles;
    console.log(this.props);

    return (
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <Content style={styles.container}>
              <ScrollView>
                <Form style={styles.wrapForm}>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{DON_VI}</Label>
                    <Input
                      onChangeText={useraccount_DVKD =>
                        this.setState({ useraccount_DVKD })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      getRef={input => (this.tenDonVi = input)}
                      onSubmitEditing={() => {
                        this.ma_so_thue._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{MA_SO_THUE}</Label>
                    <Input
                      onChangeText={useraccount_masothue =>
                        this.setState({ useraccount_masothue })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      keyboardType="phone-pad"
                      autoCorrect={false}
                      getRef={input => (this.ma_so_thue = input)}
                      onSubmitEditing={() => {
                        this._name._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{HO_TEN}</Label>
                    <Input
                      onChangeText={useraccount_fullname =>
                        this.setState({ useraccount_fullname })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      getRef={input => (this._name = input)}
                      onSubmitEditing={() => {
                        this.phone_number._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{SO_DIEN_THOAI}</Label>
                    <Input
                      onChangeText={useraccount_phone =>
                        this.setState({ useraccount_phone })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      keyboardType="phone-pad"
                      autoCorrect={false}
                      getRef={input => (this.phone_number = input)}
                      onSubmitEditing={() => {}}
                    />
                  </Item>

                  {/*                
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{PASSWORD}</Label>
                    <Input
                      onChangeText={useraccount_password =>
                        this.setState({ useraccount_password })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      secureTextEntry={true}
                      getRef={input => (this.password_input = input)}
                      onSubmitEditing={() => {
                        this.password_input_again._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{PASSWORD_AGAIN}</Label>
                    <Input
                      onChangeText={passwordAgain =>
                        this.setState({ passwordAgain })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      secureTextEntry={true}
                      getRef={input => (this.password_input_again = input)}
                      onSubmitEditing={() => {}}
                    />
                  </Item> */}
                  <Item style={[wrapInput]} floatingLabel last>
                    <Label>{DIA_CHI}</Label>
                    <Input
                      onTouchStart={() => {
                        navigation.navigate("CheckIn", { instance: this });
                      }}
                      returnKeyType="done"
                      value={this.state.useraccount_diachi}
                      numberOfLines={3}
                      flexWrap="wrap"
                      getRef={input => (this.address_input = input)}
                      onSubmitEditing={() => {}}
                    />
                  </Item>

                  <Button
                    full
                    style={styles.button}
                    onPress={() => {
                      this._signUpUser();
                      
                      console.log(this.state);
                    }}
                  >
                    <Text style={styles.textButton}>ĐĂNG KÝ</Text>
                  </Button>
                </Form>
              </ScrollView>
            </Content>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
  goBack() {
    if (this.props.Goto !== undefined) this.props.navigation.navigate(this.props.Goto);
    else this.props.navigation.goBack();
  }
  openFBprofile() {
    Linking.canOpenURL("fb://profile/")
      .then(support => {
        if (support) {
          Linking.openURL("fb://profile/");
        } else {
          Linking.openURL("https://www.facebook.com/me");
        }
      })
      .catch(err => console.error("An error occurred", err));
  }
  isChecked() {
    const {
      useraccount_DVKD,
      useraccount_fullname,
      useraccount_phone,
      useraccount_masothue,
      useraccount_diachi,
      useraccount_location
    } = this.state;
    if (
      useraccount_DVKD &&
      useraccount_fullname &&
      useraccount_phone &&
      useraccount_masothue &&
      useraccount_diachi &&
      useraccount_location
    ) {
      return true;
    }

    Toast.show({
      text: "Bạn cần nhập đủ các mục!",
      buttonText: "Okay",
      buttonTextStyle: { color: "#008000" },
      buttonStyle: { backgroundColor: "#5cb85c" }
    });
    return false;
  }
  _signUpUser = () => {
    if (this.isChecked()) {
      console.log("signUP");

      var data = {
        useraccount_DVKD: this.state.useraccount_DVKD,
        useraccount_fullname: this.state.useraccount_fullname,
        useraccount_masothue: this.state.useraccount_masothue,
        useraccount_phone: this.state.useraccount_phone,
        useraccount_diachi: this.state.useraccount_diachi,
        useraccount_location: this.state.useraccount_location
      };
      this.props.signUp(data, this.goBack());
      console.log(data);
    }
  };
  componentDidMount() {}
}

const { width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  lableText: { width: width / 3 },
  container: {
    backgroundColor: "#aed581",
    flex: 1
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    height: 50,
    borderRadius: 4,
    backgroundColor: BACKGROUND_COLOR_HEADER
  },
  pickerAddress: {
    marginTop: 16
  },
  wrapForm: {
    padding: "2%",
    width: "96%",
    backgroundColor: "#c5e1a5",
    borderRadius: 4,
    marginHorizontal: "2%",
    marginBottom: 4
  },
  wrapInput: {
    backgroundColor: "#dcedc8",
    paddingHorizontal: 0,
    paddingVertical: 4,
    borderRadius: 4
  },
  borderButton: {
    marginVertical: 10,
    borderColor: "gray",
    backgroundColor: "#FFF",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 10
  },
  textButton: {
    fontSize: 17,
    color: "white"
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {};
}
export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
