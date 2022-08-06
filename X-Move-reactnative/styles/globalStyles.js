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
  white: {
    color: "white",
  },
  registerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },

  color: {
    color: "#FF4D00",
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
  home: {
    marginBottom: 50,
  },

  homeText: {
    margin: 10,
    alignSelf: "center",
    fontSize: 20,
    color: "gray",
  },

  sportsCategories: {
    height: 160,
    flexDirection: "row",
    flex: 1,
  },
  // Sports Screens
  sportLayout: {
    alignSelf: "center",
    marginTop: 45,
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

  safeArea: {
    marginBottom: 50,
  },

  sportType: {
    fontSize: 18,
  },
  sportImage: {
    width: "101%",
    height: 200,
    borderBottomColor: "black",
    borderBottomWidth: 0,
    justifyContent: "flex-end",
  },
  sportIcon: {
    width: 25,
    height: 25,
  },
  iconGap: {
    marginLeft: 35,
    fontSize: 17,
  },
  // Players Page
  playersScreen: {
    marginBottom: 30,
  },

  playerAvatar: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },

  playerInfoSection: {
    marginLeft: 40,
  },

  playerInfoName: {
    fontSize: 30,
  },

  playerInfoEmail: {
    color: "gray",
  },

  navigationButtons: {
    flexDirection: "row",
  },

  navigationText: {
    color: "white",
    fontWeight: "bold",
  },

  // Field component
  fieldInfo: {
    fontSize: 15,
  },

  fieldPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },

  fieldTitle: {
    paddingRight: 30,
  },

  navigationViewProfile: {
    color: "white",
    fontWeight: "bold",
  },

  playerCard: {
    margin: 20,
    borderRadius: 20,
    flexDirection: "row",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  chatButton: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#2C75E2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 7,
  },
  viewProfileButton: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "tomato",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    marginLeft: 7,
  },

  // Player Profile
  playerProfileButton: {
    width: 150,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },

  playerPicture: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },

  playerInfo: {
    padding: 40,
    flex: 1,
  },

  playerName: {
    fontSize: 35,
  },

  playerEmail: {
    color: "gray",
  },

  playerProfileNavigation: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  profileMargin: {
    padding: 10,
  },

  playerProfileHead: {
    margin: 10,
    flexDirection: "row",
  },

  ScrollView: {
    marginBottom: 40,
  },

  profilePicture: {
    height: 200,
    width: 200,
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
  about: {
    backgroundColor: "#eee",
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
  },

  editProfile: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  profileSection: {
    padding: 20,
  },

  userEmail: {
    color: "gray",
    fontSize: 20,
  },

  profileSpace: {
    marginTop: 50,
  },

  blur: {
    height: "100%",
  },

  saveBttn: {
    color: "white",
    fontSize: 16,
  },

  userName: {
    fontSize: 40,
    marginBottom: 15,
  },

  userInfo: {
    flexDirection: "column",
    marginLeft: 40,
  },
  // Profile Information Modal

  modal: {
    flex: 0.6,
    backgroundColor: "white",
    marginTop: 100,
    marginHorizontal: 20,
  },

  modalHead: { flexDirection: "row", margin: 15 },

  modalTitle: { fontSize: 20, marginLeft: 15 },

  modalInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    margin: 10,
  },

  saveAbout: {
    alignSelf: "center",
    marginTop: 40,
    fontSize: 30,
    backgroundColor: "tomato",
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 10,
  },

  addLocation: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  // Friends Modal

  friendModal: {
    backgroundColor: "white",
  },

  friendAvatar: {
    backgroundColor: "#ccc",
    marginLeft: -10,
  },

  friendModalHeaders: {
    fontSize: 25,
    color: "gray",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 5,
    marginTop: 10,
  },

  friendCard: {
    marginVertical: 10,
  },

  friendCardPadding: {
    paddingLeft: 10,
  },

  friendName: {
    paddingRight: 30,
  },

  // About
  aboutIcon: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  aboutWord: {
    marginLeft: 10,
    fontSize: 18,
    color: "rgb(88, 89, 88)",
  },

  aboutChip: {
    backgroundColor: "#ff4D00",
    margin: 5,
  },

  divider: {
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "#bbb",
    marginVertical: 30,
  },

  aboutPlayer: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    color: "#333",
  },

  sportsList: {
    paddingTop: 5,
    flexWrap: "wrap",
    flexDirection: "row",
  },

  postSection: {
    marginTop: 20,
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
  drawerImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  drawerBackground: {
    height: 60,
  },

  drawerContainer: {
    flex: 1,
  },

  drawerBackgroundImage: {
    padding: 20,
  },

  drawerImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

  drawerText: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },

  drawerEmail: {
    color: "white",
    marginBottom: 5,
  },

  drawerView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },

  drawerBottom: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },

  drawerLogo: {
    marginLeft: 10,
  },

  share: {
    flexDirection: "row",
    alignItems: "center",
  },

  shareBttn: {
    paddingVertical: 15,
  },

  shareText: {
    fontSize: 15,
    marginLeft: 20,
  },

  signOutText: {
    fontSize: 15,
    marginLeft: 15,
  },

  signOutBttn: {
    flexDirection: "row",
    alignItems: "center",
  },
  signOutView: {
    paddingVertical: 15,
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
    justifyContent: "space-between",
  },

  // Feeds Screen
  feeds: {
    flex: 1,
  },
  noFeeds: {
    fontSize: 20,
    alignItems: "center",
    margin: 30,
  },
  feedModal: {
    flex: 1,
    backgroundColor: "white",
  },

  pictureInput: {
    alignItems: "center",
  },

  postImage: {
    height: 400,
    width: "100%",
  },

  picture: {
    marginVertical: 30,
  },

  post: {
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 10,
    borderColor: "#FF4D00",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#FF4D00",
    color: "white",
  },

  postStyle: {
    marginVertical: 15,
    paddingVertical: 5,
  },

  postCover: {
    height: 300,
  },

  postActions: {
    marginBottom: -15,
  },

  postParagraph: {
    fontWeight: "bold",
    fontSize: 15,
  },

  postComment: {
    flexDirection: "row",
    alignItems: "center",
  },

  postPlayerPic: {
    marginLeft: -10,
  },

  commentInput: {
    margin: 5,
    height: 45,
    flex: 0.97,
  },

  addComment: {
    marginHorizontal: -15,
  },

  avatarIcon: {
    backgroundColor: "#ccc",
    marginLeft: -10,
  },

  postText: {
    color: "white",
    fontSize: 20,
  },

  // Chat Header
  lastMessage: {
    color: "#555",
  },

  userBPic: {
    marginLeft: -10,
  },

  userBAvatar: {
    backgroundColor: "#ccc",
    marginLeft: -10,
  },
  chats: {
    borderBottomColor: "#eee",
    borderBottomWidth: 0.7,
    marginBottom: 8,
  },

  chatsList: {
    flex: 1,
    padding: 10,
  },

  chatScreen: {
    flex: 1,
  },

  friendsList: {
    flex: 1,
    padding: 10,
  },

  chatCard: {
    paddingLeft: 10,
    height: 80,
    justifyContent: "center",
  },

  chatTitle: {
    paddingRight: 30,
  },

  floatingIcon: {
    position: "absolute",
    right: 40,
    bottom: 40,
    borderRadius: 60,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4D00",
  },

  friends: {
    height: 80,
  },

  // Map Screen
  map: {
    flex: 0.999,
    marginBottom: 45,
  },
  mapSearch: {
    width: 300,
    position: "absolute",
    bottom: 70,
    backgroundColor: "#ff4d00",
  },

  mapError: {
    width: 300,
    position: "absolute",
    top: 40,
    color: "red",
    textAlign: "center",
  },

  mapContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
