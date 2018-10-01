import React from "react";
import {
  View,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Dimensions,
  Text
} from "react-native";

const Loading = ({ size, loading }) => {
  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={loading}
      onRequestClose={() => {
        console.log("close modal");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size={size} animating={true} />
          <View style={styles.wrapText}>
            <Text style={styles.text}>Đang tải dữ liệu</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorWrapper: {
    padding: 16,
    margin: 4,
    flexDirection: "row",
    backgroundColor: "#EBEBEB",
    width: width * 0.8,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text: {
    fontSize: 16
  },
  wrapText : {
    margin: 8,
  }
});

export { Loading };
