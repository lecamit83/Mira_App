import React, { Component } from "react";
import { StyleSheet, View, Dimensions, AsyncStorage } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { connect } from "react-redux";

import Header from "./header/CompanyHeader";
import { MAP_POSITION } from "../Constant";
import { fetchCompany } from "../redux/actions/actionCreators";
import { Loading } from "../components/common/Loading";
import { API_NBL } from "../api/linkAPI";

const { height, width } = Dimensions.get("window");
const LAT_DEL = 0.012;
const LNG_DEL = (LAT_DEL * width) / height;

class MapViews extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="Bản Đồ" />
  });

  constructor(props) {
    super(props);
    this.state = {
      regionPosition: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      }
    };
  }

  calcDelta(lat, long, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 / 5;
    const circumference = 40075 / 1800;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = accuracy / oneDegreeOfLongitudeInMeters;
    this.setState({
      regionPosition: {
        latitude: lat,
        longitude: long,
        latitudeDelta: Math.max(0, latDelta),
        longitudeDelta: Math.max(0, lonDelta)
      }
    });
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        this.calcDelta(lat, long, accuracy);
      },
      err => {
        console.log(err);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        this.calcDelta(lat, long, accuracy);
      },
      err => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        useSignificantChanges: true
      }
    );
  }
  _renderMarker() {
    return {
      latitude: this.state.regionPosition.latitude,
      longitude: this.state.regionPosition.longitude
    };
  }
  _renderPositionCompany(companys) {
    let views = [];
    for (let index = 0; index < companys.length; index++) {
      const company = companys[index];
      var position = company.useraccount_location;
      var location = position.split("|");
      views.push(
        <Marker
          key={position}
          coordinate={{
            latitude: Number(location[0]),
            longitude: Number(location[1])
          }}
          title={company.useraccount_DVKD}
          onCalloutPress={() => {
            this.props.navigation.navigate("DetailCompany", {
              itemsProps: company
            });
          }}
        />
      );
    }
    return views;
  }

  render() {
    const { regionPosition } = this.state;
    const { map, container, radius, marker } = styles;
    const { companys } = this.props;
    const { listAccount } = this.props.navigation.state.params;
    console.log(listAccount);
    
    return (
      <View style={container}>
        {regionPosition.latitude && regionPosition.longitude ? (
          <MapView
            style={map}
            provider={MapView.PROVIDER_GOOGLE}
            ref="map"
            region={regionPosition}
          >
            <Marker
              anchor={{ x: 0.5, y: 0.5 }}
              coordinate={this._renderMarker()}
            >
              <View style={radius}>
                <View style={marker} />
              </View>
            </Marker>

            {this._renderPositionCompany(this._filterCompanyHaveItem(companys, listAccount))}
          </MapView>
        ) : (
          <Loading size="large" loading={true} />
        )}
      </View>
    );
  }
  _filterCompanyHaveItem(companys, listAccount) {
    let list = [];
    companys.forEach(company => {
      for(let index = 0; index < listAccount.length; index++){
        if(company.useraccount_id === listAccount[index]) {
          list.push(company);
        }
      }
    });
    return list;
  }
  componentDidMount() {
    if (this.props.companys.length == 0) {
      this.props.fetchCompany(API_NBL);
    }
  }
  // Demo AsyncStore = ShareReferences in Android
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
}

const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(0,112,255,0.3)",
    justifyContent: "center",
    alignItems: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF",
    borderWidth: 1,
    borderColor: "white"
  },
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: width
  }
});
function mapStateToProps(state) {
  return {
    companys: state.companys.arrCo
  };
}
export default connect(
  mapStateToProps,
  { fetchCompany }
)(MapViews);
