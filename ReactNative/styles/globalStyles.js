import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 70,
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

  // Register Page
  registerHead: {
    color: "#FF4D00",
    fontSize: 40,
    marginTop: 100,
    marginBottom: 50,
  },
  registerInput: {
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  alreadyUser: {
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    color: "gray",
  },
  // Welcome Page
  welcomeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sportsCategories: {
    margin: 22,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "red",
    width: 160,
    height: 160,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#ddd",
    justifyContent: "center",
  },
  sportsContainer: {
    alignItems: "center",
  },
  // Sports Screens
  sportLayout: {
    marginLeft: 30,
    marginTop: 50,
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  sportType: {
    fontSize: 18,
  },
  sportIcon: {
    width: 25,
    height: 25,
  },
  iconGap: {
    marginLeft: 30,
  },
  // Players Page
  playerCard: {
    margin: 20,
    backgroundColor: "#ddd",
    borderRadius: 20,
    padding: 10,
  },

  // Profile Screen
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 10,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Favorite Sports Drawer Screen
  sportSection: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sportSectionText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  sportTab: {
    marginLeft: 30,
    marginTop: 8,
    width: 300,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
  },
});
