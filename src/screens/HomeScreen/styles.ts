import {Dimensions, StyleSheet} from "react-native";

const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#f7d102",
  },
  headerOne: {
    height: height * 0.064,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "3%",
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    borderLeftColor: "#d1d1d1",
    borderLeftWidth: 2,
    paddingLeft: 8,
  },
  image: {
    height: 30,
    width: 30,
  },
  headerTwo: {
    marginLeft: 15,
    width: "20%",
    height: height * 0.064,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
