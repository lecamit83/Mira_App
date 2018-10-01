//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, AsyncStorage, Text } from "react-native";
import { connect } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";
import Item from "./items/ProductItem";
import { Loading } from "./common/Loading";
import { BACKGROUND_COLOR } from "../const/Const";
import { fetchData } from "../redux/actions/actionCreators";

var urls = [
  "http://api.hifapp.com/api/thuoc?page=",
  "http://api.hifapp.com/api/tpcn?page=",
  "http://api.hifapp.com/api/vttb?page=",
  "http://api.hifapp.com/api/mypham?page="
];
// create a component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  render() {
    const { container, wrapperItem } = styles;
    const { navigation, products, pages } = this.props;
    var id = this.props.screenProps;
    return (
      <View style={container}>
        {products[id].length !== 0 ? (
          <FlatList
            data={this._filterProduct(products[id])}
            renderItem={({ item }) => (
              <Item navigation={navigation} items={item} />
            )}
            keyExtractor={(item, index) => {
              return item.product_id + "#" + index;
            }}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              this.props.fetchData(id, pages[id]);
            }}
          />
        ) : (
          <Loading size="large" loading={true}/>
        )}
      </View>
    );
  }

  _filterProduct(datas) {
    var filterDatas = datas.filter(
      data =>
        data.product_name
          .toUpperCase()
          .indexOf(this.state.query.toUpperCase()) > -1
    );
    return filterDatas;
  }
  componentDidMount() {
    var id = this.props.screenProps;
    this.props.fetchData(id, this.props.pages[id]);
    this.props.navigation.setParams({ instance: this });
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: BACKGROUND_COLOR
  },

  wrapperItem: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    products: state.products.posts,
    pages: state.products.pages
  };
}
export default connect(
  mapStateToProps,
  { fetchData }
)(Main);
