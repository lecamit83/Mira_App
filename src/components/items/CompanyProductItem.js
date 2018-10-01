import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import {
  BORDER_COLOR,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR_HEADER,
  BACKGROUND_COLOR
} from "../../const/Const";

// create a component
class ProductItem extends Component {
  render() {
    const { item, line, image, info, wrap, icon, buttonAdd, textWrap } = styles;
    const { navigation, name, cost } = this.props;

    return (
      // <TouchableOpacity
      //   // style={item}
      //   style = {{marginLeft: 5, marginRight: 5}}
      //   onPress={() => navigation.navigate("DetailsScreen", {name: name, cost: cost})}
      // >
      //   <Image style={image} source={require("../../images/sp.png")} />
      //   <View style={info}>
      //     <View  style={textWrap}>
      //       <Text style={{fontSize: 17, color: "#FF8F00" }} >{name}</Text>
      //       <Text style={{ marginTop: 5 }}>{`${cost}đ`}</Text>
      //     </View>
      //     <TouchableOpacity style={wrap}
      //       onPress={()=>alert("ADD")}
      //     >
      //       <View style={buttonAdd}>
      //         <Image style={icon} source={require("../../images/add.png")} />
      //         <Text>Thêm Sản Phẩm</Text>
      //       </View>
      //     </TouchableOpacity>
      //   </View>
      // </TouchableOpacity>

      <TouchableOpacity
        style={{ marginLeft: 5, marginRight: 5 }}
        onPress={() =>
          navigation.navigate("DetailsScreen", { name: name, cost: cost })
        }
      >
        <Card style={{ flex: 0 }}>
          <CardItem bordered>
            <Left>
              <Thumbnail source={require("../../images/sp.png")} />
              <Body>
                <Text style={{ fontSize: 17 }}>Tên Sản Phẩm</Text>
                <Text style={{ marginTop: 5 }} note>
                  April 15, 2018
                </Text>
              </Body>
            </Left>
            <TouchableOpacity onPress={()=>{navigation.navigate("MapScreen")}} >
              <Right>
                <Image
                  style={{ height: 35, width: 35 }}
                  source={require("../../images/directions_black.png")}
                />
              </Right>
            </TouchableOpacity>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={require("../../images/sp.png")}
                style={{ height: 200, width: width - 40, flex: 1 }}
              />
              <Text style={{ marginTop: 10 }}>
                Noi dung mo ta ngan gon san pham se hien thi toi da 02 dong tai
                day
              </Text>
            </Body>
          </CardItem>
          <CardItem
            style={{ backgroundColor: BACKGROUND_COLOR_HEADER, height: 45 }}
          >
            <Left>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}
              >
                1.500.000 đ
              </Text>
            </Left>
            <Right>
              <Image
                style={icon}
                source={require("../../images/add_to_company_white.png")}
              />
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  item: {
    margin: 4,
    height: height / 2 + 10,
    width: width / 2 - 8,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR
  },

  line: {
    backgroundColor: BACKGROUND_COLOR_HEADER,
    height: 0.3,
    marginLeft: 15,
    marginRight: 15
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
    height: 30,
    width: 30,
    marginLeft: 5
  },

  buttonAdd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ProductItem;
