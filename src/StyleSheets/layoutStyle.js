import { StyleSheet } from "react-native";

const layoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 30,
    width: "80%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
  },
  button1: {
    backgroundColor: "#FF5722",
  },
  button2: {
    backgroundColor: "#4CAF50",
  },
  button3: {
    backgroundColor: "#2196F3",
  },
  button4: {
    backgroundColor: "#0F00FF",
  },
  button5: {
    backgroundColor: "#9C27B0",
  },
  icon: {
    color: "#ffffff",
    marginRight: 10,
  },
});

export default layoutStyle;
