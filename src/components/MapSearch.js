import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { Icon } from "native-base";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Loading } from "../components/common/Loading";
import Header from "./header/CompanyHeader";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const { height, width } = Dimensions.get("window");
const LAT_DEL = 0.012;
const LNG_DEL = (LAT_DEL * width) / height;

class MapSearch extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="Bản Đồ" />
  });
  constructor(props) {
    super(props);
    this.state = {
      regionPosition: {
        latitude: 65.9692,
        longitude: -18.535,
        latitudeDelta: LAT_DEL,
        longitudeDelta: LNG_DEL
      },
      markerPosition: {
        latitude: null,
        longitude: null
      }
    };
  }
  render() {
    const { regionPosition, markerPosition } = this.state;
    const { instance } = this.props.navigation.state.params;
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        {regionPosition.latitude && regionPosition.longitude ? (
          <View style={styles.container}>
            <MapView
              style={styles.map}
              provider={MapView.PROVIDER_GOOGLE}
              ref="map"
              region={regionPosition}
            >
              {markerPosition.latitude && markerPosition.longitude ? (
                <Marker coordinate={markerPosition} />
              ) : null}
            </MapView>
            <View style={{ flex: 1 }}>
              <GooglePlacesAutocomplete
                placeholder="Search"
                minLength={2}
                autoFocus={false}
                returnKeyType={"search"}
                listViewDisplayed={false}
                fetchDetails={true}
                renderDescription={row => row.description}
                onPress={(data, details = null) => {
                  console.log(data.description);

                  this.setState({
                    regionPosition: {
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      latitudeDelta: LAT_DEL,
                      longitudeDelta: LNG_DEL
                    },
                    markerPosition: {
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng
                    }
                  });
                  instance.setState({
                    useraccount_location: 
                    `${details.geometry.location.lat}|${ details.geometry.location.lng }`,
                  });
                  instance.setState({
                    useraccount_diachi : `${data.description}`,
                  });
                }}
                query={{
                  key: "AIzaSyAA3uoTVU2Flgyd5UaonjcPUECBUAj70WE",
                  language: "en",
                  types: "geocode"
                }}
                styles={GooglePlacesStyles}
                textInputProps={{
                  autoCorrect: false
                }}
                currentLocation={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                GoogleReverseGeocodingQuery={{}}
                GooglePlacesSearchQuery={{
                  rankby: "distance",
                  types: "food"
                }}
                filterReverseGeocodingByTypes={[
                  "locality",
                  "administrative_area_level_3"
                ]}
                debounce={0}
                renderRightButton={() => (
                  <TouchableOpacity style={styles.wrapIcon} onPressOut={Keyboard.dismiss}>
                    <Icon name="search" size={30} />
                  </TouchableOpacity>
                )}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.saveButton}>
                <Text style={styles.saveText}>Lưu vị trí</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Loading size="large" />
        )}
      </View>
    );
  }
}
export default MapSearch;

const GooglePlacesStyles = {
  textInputContainer: {
    width: "100%",
    backgroundColor: "#019688",
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  description: {
    fontWeight: "bold"
  },
  predefinedPlacesDescription: {
    color: "gray"
  },
  separator: {
    backgroundColor: "gray"
  },
  listView: {
    backgroundColor: "white"
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  wrapIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  },
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
  },
  saveButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#019688",
    justifyContent: "center",
    alignItems: "center"
  },
  saveText: { fontSize: 20, color: "white", fontWeight: "bold" }
});
