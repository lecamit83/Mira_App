//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { Card, CardItem, Text, Body, Left, Right, Toast } from "native-base";
import { connect } from "react-redux";

import Headers from "./header/CompanyHeader";
import {
  BACKGROUND_COLOR_HEADER,
  BACKGROUND_COLOR,
  LINE
} from "../const/Const";
import { addProduct } from "../api/postData";
import { deleteProduct } from "../api/deleteData";
import { deleteProductOfCompany } from "../redux/actions/actionCreators";
// create a component
class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Headers navigation={navigation} title="Chi tiết" />
  });
  constructor(props) {
    super(props);
    this.state = {
      isSaled: this.props.navigation.state.params.isSaled
    };
  }
  render() {
    const { icon, line } = styles;
    const { items, instance, index } = this.props.navigation.state.params;
    const { navigation, account, companyProduct } = this.props;
    let useraccount_id = account ? account.useraccount_id : null;
    console.log(items);

    const INFOR = [
      <Card>
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành Phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin mô tả
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.product_thongtinsanpham}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhóm dược lý
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_nhomduocly}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chỉ định
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_chidinh}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Liều Lượng & Cách Dùng
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_lieuluongcachdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_tacdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Dược lực học
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_duocluchoc}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chống chỉ định
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_chongchidinh}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thận trọng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_thantrong}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Dạng bào chế
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_dangbaoche}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Đóng gói
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_quycachdonggoi}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Bảo quản
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_dieukienbaoquan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhà sản xuất
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_nhasanxuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Xuất xứ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_xuatxu}</Text>
          </Body>
        </CardItem>
      </Card>,
      <Card>
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành Phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin mô tả
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.product_thongtinsanpham}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Liều Lượng & Cách Dùng
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.tpcn_lieuluongcachdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_congdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Đối tượng sử dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_doituongsudung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Số đăng ký quảng cáo
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_dkqc}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng phụ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_tacdungphu}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thận trọng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_thantrong}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Quá liều & xử trí
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_qualieuxutri}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Dạng bào chế
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_dangbaoche}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Đóng gói
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_quycachdonggoi}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Bảo quản
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_dieukienbaoquan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhà sản xuất
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_nhasanxuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Xuất xứ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_xuatxu}</Text>
          </Body>
        </CardItem>
      </Card>,
      <Card>
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành Phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin mô tả
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.product_thongtinsanpham}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông số kĩ thuật
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_thongsokithuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chỉ định
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_chidinh}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Hướng dẫn sử dụng
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_huongdansudung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_tacdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Model
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_model}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhãn hiệu
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_nhanhieu}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Phụ kiện
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_phukien}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin khác
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_thongtinkhac}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chú ý
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_chuy}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Kích thước
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_kichthuoc}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Trọng lượng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_trongluong}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Bảo quản
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_baoquan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhà sản xuất
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_nhasanxuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Xuất xứ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_xuatxu}</Text>
          </Body>
        </CardItem>
      </Card>,
      <Card>
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành Phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.mypham_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Công dụng
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.mypham_congdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.mypham_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhà sản xuất
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_nhasanxuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Xuất xứ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_xuatxu}</Text>
          </Body>
        </CardItem>
      </Card>
    ];
    return (
      <ScrollView style={styles.container}>
        <View>
          <CardItem bordered>
            <Left>
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#000000" }}
              >
                {items.product_name}
              </Text>
            </Left>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MapScreen" , {listAccount : items.listAccount});
                }}
              >
                <Right>
                  <Image
                    style={{ height: 35, width: 35 }}
                    source={require("../images/directions_black.png")}
                  />
                </Right>
              </TouchableOpacity>
            </View>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Image
                source={{ uri: items.product_image }}
                style={styles.image}
              />
            </Body>
          </CardItem>
          <CardItem
            style={{ backgroundColor: BACKGROUND_COLOR_HEADER, height: 45 }}
          >
            <Left>
              <Text numberOfLines={1} style={styles.cardText}>
                Hạn sử dụng: {items.product_hansudung}
              </Text>
            </Left>
            <Right>
              {!this.state.isSaled ? (
                <TouchableOpacity
                  onPress={() => {
                    var data = {
                      product_id: items.product_id,
                      useraccount_id: useraccount_id
                    };
                    addProduct(data)
                      .then(resJSON =>
                        Toast.show({
                          text: resJSON.message,
                          buttonText: "Okay",
                          buttonTextStyle: { color: "#008000" },
                          buttonStyle: { backgroundColor: "#5cb85c" }
                        })
                      )
                      .catch(err => console.log(err));
                  }}
                >
                  <Image
                    style={icon}
                    source={require("../images/add_to_company_white.png")}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    var data = {
                      product_id: items.product_id,
                      useraccount_id: useraccount_id
                    };
                    instance.state.arrProducts.splice(index, 1);
                    instance.setState({
                      arrProducts: instance.state.arrProducts
                    });
                    this.props.deleteProductOfCompany(
                      data,
                      instance.state.arrProducts
                    );
                  }}
                >
                  <Image
                    style={icon}
                    source={require("../images/remove_from_company_white.png")}
                  />
                </TouchableOpacity>
              )}
            </Right>
          </CardItem>
        </View>
        {INFOR[items.product_type - 1]}
      </ScrollView>
    );
  }
}

const { height, width } = Dimensions.get("window");

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    margin: 4
  },

  cardText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#FFFFFF",
    overflow: "scroll"
  },

  frameImage: {
    width: width - 6,
    height: (height * 4) / 10,
    marginTop: 2
  },

  line: { backgroundColor: LINE, height: 1, opacity: 0.6 },
  intro: {
    margin: 5
  },

  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: height / 15
  },
  image: {
    resizeMode: "contain",
    aspectRatio: 1.5,
    width: "100%"
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    padding: 3,
    marginBottom: 5
  },

  wrapImage: {
    height: height / 15,
    width: height / 15,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    height: 24,
    width: 24,
    resizeMode: "contain"
  },

  textStyle: {
    color: "#FF8F00",
    fontSize: 15
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    account: state.login.account,
    companyProduct: state.productCompany.proCompany
  };
}
export default connect(
  mapStateToProps,
  { deleteProductOfCompany }
)(Details);
