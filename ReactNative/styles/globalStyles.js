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
    paddingHorizontal: 40,
    borderColor: "#333",
    borderWidth: 1,
  },
  registerButton: {
    backgroundColor: "#FF4D00",
    marginLeft: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
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
    marginTop: 100,
    marginBottom: 100,
  },
  loginBackgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  loginInput: {
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 40,
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  login: {
    backgroundColor: "#FF4D00",
    paddingVertical: 10,
    paddingHorizontal: 130,
    marginTop: 20,
    borderRadius: 15,
    color: "white",
  },
  loginLabel: {
    alignSelf: "flex-start",
    marginLeft: 60,
    fontSize: 16,
    color: "gray",
  },
});
