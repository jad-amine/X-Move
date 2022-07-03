import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
  },

  // Landing Page
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  XMOVE: {
    fontSize: 80,
    color: "white",
    marginBottom: 330,
    fontFamily: "Fondamento_400Regular",
  },
  landingPageButtons: {
    flexDirection: "row",
  },
  loginButton: {
    backgroundColor: "white",
    marginRight: 20,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderColor: "#333",
    borderWidth: 1,
  },
  registerButton: {
    backgroundColor: "#FF4D00",
    marginLeft: 20,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  butt: {
    borderRadius: 10,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  registerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  styledX: {
    fontSize: 70,
    color: "#FF4D00",
  },
  // login Page
  loginHead: {
    color: "#FF4D00",
    fontSize: 40,
  },
});
