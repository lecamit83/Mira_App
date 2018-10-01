import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ListView,
  FlatList,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import Header from "./header/MainHeaders";
import Item from "./items/CompanyItem";
import { BACKGROUND_COLOR } from "../const/Const";
import { fetchCompany } from "../redux/actions/actionCreators";
import { API_NBL } from "../api/linkAPI";

class ListCompany extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: props => <Header {...props} navigation={navigation} placeHolder="Nhập tên công ty cần tìm..." />
  });
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      loading: false
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ instance: this });
  }
  render() {
    const { container, wrapperItem } = styles;
    const { navigation, companys } = this.props;

    return (
      <View style={container}>
        <FlatList
          data={this._filterCompany(companys)}
          renderItem={({ item }) => (
            <Item navigation={navigation} itemProps={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
        />
      </View>
    );
  }
  _filterCompany(datas) {
    var filterDatas = datas.filter(
      data =>
        data.useraccount_DVKD
          .toUpperCase()
          .indexOf(this.state.query.toUpperCase()) > -1
    );
    return filterDatas;
  }
  componentDidMount() {
    if (this.props.companys.length == 0) {
      this.props.fetchCompany(API_NBL);
      this.props.navigation.setParams({ instance: this });
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 5,
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
    companys: state.companys.arrCo
  };
}
export default connect(
  mapStateToProps,
  { fetchCompany }
)(ListCompany);
