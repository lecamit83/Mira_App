//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

import { Container, Content, Form, Header, Item, Button, Input, Label, Textarea, Picker, Icon, Title, Left, Right, Body } from 'native-base';

import CompanyHeader from "./header/CompanyHeader";
import UserInput from "./items/UserInput";
import {
  EMAIL,
  PASSWORD,
  PASSWORD_AGAIN,
  HO_TEN,
  DON_VI,
  MA_SO_KINH_DOANH,
  MA_SO_THUE,
  SO_DIEN_THOAI,
  SIGN_UP,
  BACKGROUND_COLOR_HEADER
} from "../const/Const";
// create a component

const {width, height} = Dimensions.get("window");

class SignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <CompanyHeader navigation={navigation} title="Thêm Thực Phẩm Chức Năng" />
  })
  
  constructor(props) {
    super(props);
    this.state = {
      selectedDuocLy: "key1",
      selectedBaoChe: "key1",
      selectedXuatXu: "key2",
    };
  }
  onValueDuocLyChange(value) {
    this.setState({
      selectedDuocLy: value
    });
  }
  onBaoCheChange(value) {
    this.setState({
      selectedBaoChe: value
    });
  }
  onXuatXuChange(value) {
    this.setState({
      selectedXuatXu: value
    });
  }

  render() {
    const { navigation } = this.props;
    const { container } = styles;
    return (
      // <View style={container}>
      //   <Header navigation={navigation} title={SIGN_UP} />
      //   <ScrollView>
      //     <UserInput placeholder={DON_VI} />
      //     <UserInput placeholder={MA_SO_KINH_DOANH} />
      //     <UserInput placeholder={SO_DIEN_THOAI} />
      //     <UserInput placeholder={PASSWORD} secure={true} />
      //     <UserInput placeholder={PASSWORD_AGAIN} secure={true} />
      //     <UserInput placeholder={HO_TEN} />
      //     <UserInput placeholder={MA_SO_THUE} />
      //     <TouchableOpacity style={styles.borderButton}>
      //       <Text style={styles.textButton}>{SIGN_UP}</Text>
      //     </TouchableOpacity>
      //   </ScrollView>
      // </View>N

      <ScrollView>
        <Content style = {{marginLeft: 15, marginRight: 15, alignContent: "center"}}>
          <Form>
            <Item floatingLabel >
              <Label>Số Đăng Ký</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Tên Thuốc</Label>
              <Input />
            </Item>

             <Button iconRight style = {{margin: 15, marginTop: 45, borderRadius: 5, backgroundColor: BACKGROUND_COLOR_HEADER}}>
              <Text style={{paddingLeft: 10, paddingRight: 10, color: "#FFF"}}>UPLOAD IMAGE</Text>
              <Icon name="image"/>
            </Button>
            {/* <Item floatingLabel> */}
              {/* <Label>Tên Thuốc</Label> */}
              <Form>
              <Textarea style = {{marginTop: 20}} rowSpan={5} bordered placeholder="Thành Phần" />
              </Form>
            {/* </Item> */}
          
            <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: BACKGROUND_COLOR_HEADER }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Nhóm Dược Lý</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: width*0.5, marginTop: 20 }}
              selectedValue={this.state.selectedDuocLy}
              onValueChange={this.onValueDuocLyChange.bind(this)}
            >
              <Picker.Item label="Dạng Dược Lý 1" value="key0" />
              <Picker.Item label="Dạng Dược Lý 2" value="key1" />
              <Picker.Item label="Dạng Dược Lý 3" value="key2" />
              <Picker.Item label="Dạng Dược Lý 4" value="key3" />
              <Picker.Item label="Dạng Dược Lý 5" value="key4" />
            </Picker>
           
            <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: BACKGROUND_COLOR_HEADER }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Nhóm Dược Lý</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: width * 0.5, marginTop: 20 }}
              selectedValue={this.state.selectedBaoChe}
              onValueChange={this.onBaoCheChange.bind(this)}
            >
              <Picker.Item label="Dạng Bào Chế 1" value="key0" />
              <Picker.Item label="Dạng Bào Chế 2" value="key1" />
              <Picker.Item label="Dạng Bào Chế 3" value="key2" />
              <Picker.Item label="Dạng Bào Chế 4" value="key3" />
              <Picker.Item label="Dạng Bào Chế 5" value="key4" />
            </Picker>

             <Form>
              <Textarea style = {{marginTop: 20}} rowSpan={5} bordered placeholder="Mô tả sản phẩm" />
              </Form>
              <Form>
              <Textarea style = {{marginTop: 20}} rowSpan={5} bordered placeholder="Quy cách đóng gói" />
              </Form>
              <Item floatingLabel>
              <Label>Tác dụng</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Chỉ định</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Chống chỉ định</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Dược lực học</Label>
              <Input />
            </Item>
              <Form>
              <Textarea style = {{marginTop: 20}} rowSpan={5} bordered placeholder="Thận trọng" />
              </Form>
              <Form>
              <Textarea style = {{marginTop: 20}} rowSpan={5} bordered placeholder="Tương tác thuốc" />
              </Form>
            <Item floatingLabel>
              <Label>Bảo quản</Label>
              <Input />
            </Item>
            <Form>
              <Textarea style = {{marginTop: 20}} rowSpan={5} bordered placeholder="Liều lượng và cách dùng" />
              </Form>
              <Form>
              <Textarea style = {{marginTop: 20}} rowSpan={5} bordered placeholder="Quá liều và xử lý" />
              </Form>
            <Item floatingLabel>
              <Label>Ngày sản xuất</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Ngày hết hạn</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Nhà sản xuất</Label>
              <Input />
            </Item>
            
            <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: BACKGROUND_COLOR_HEADER }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Xuất xứ</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: width * 0.5, marginTop: 20 }}
              selectedValue={this.state.selectedXuatXu}
              onValueChange={this.onXuatXuChange.bind(this)}
            >
              <Picker.Item label="Việt Nam" value="key0" />
              <Picker.Item label="Hoa Kỳ" value="key1" />
              <Picker.Item label="Nhật Bản" value="key2" />
              <Picker.Item label="Nga" value="key3" />
            </Picker>
            <Button full info style = {{margin: 15, marginTop: 45, borderRadius: 5, backgroundColor: BACKGROUND_COLOR_HEADER}}>
              <Text>THÊM MỚI</Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  borderButton: {
    marginTop: 5,
    borderColor: "gray",
    backgroundColor: "#FFF",
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10
  },
  textButton: {
    fontSize: 20,
    color: "green",
    padding: 5
  }
});

//make this component available to the app
export default SignUp;
