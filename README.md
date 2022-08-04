<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.

**[PROJECT PHILOSOPHY](#philosophy) • [WIREFRAMES](#wireframes) • [TECH STACK](#stack) • [IMPLEMENTATION](#implementation) • [HOW TO RUN?](#run)**

</div>

<br><br>

<img id="philosophy" src="./readme/title2.svg"/>

> X-Move is about building the most engaged X-treme Sports Community by connecting athletes to activitiy partners and owners of playgrounds and sports equipment renting stores. It consist of three types of users: Players use a mobile app, Owners use a web app and Admins use a desktop app.

### User Stories

- As a user, I want to easily search for sports enthousiaste subscribed to specific sports categories.

- As a user, I want to easily locate players, fields & equipment renting stores based on their location on the map.

- As a user, I want to live chat with other players to agree on games/activities schedules.

- As a user, I want to easily check for fields and equipment renting prices/availabity on a dynamic calendar.

- As a user, I want to add friends, add posts, view friends feeds/posts and add likes and comments.

### Owner Stories

- As an owner, I want a fully-fledged calendar to manage my reservations.

- As an owner, I want to be able to update my rental prices and property information.

### Admin Stories

- As an admin, I want to be able to check my application statstics and lifecycle by interacting with a compelling dashboard showing the application data analysis visualization.

- As an admin, I want to be able to manage players, fields and equipment renting stores.

<br><br>

<img id="wireframes" src="./readme/title3.svg"/>
<br><br>
> This design was planned before on paper, then moved to Figma app for the fine details.
<br><br>

| Landing Page                                                    | Resgister                                                        | Categories                                                         |
| --------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| <img src="readme/figma/landing.svg" width="400" height="800" /> | <img src="readme/figma/register.svg" width="400" height="800" /> | <img src="readme/figma/categories.svg" width="400" height="800" /> |

| Players                                                         | Player Profile                                                  | Feeds                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------- |
| <img src="readme/figma/players.svg" width="400" height="800" /> | <img src="readme/figma/profile.svg" width="400" height="800" /> | <img src="readme/figma/feeds.svg" width="400" height="800" /> |

<br><br>

<img id="stack" src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [React Native ](https://reactnative.dev/)app development framework. React Native is a cross-platform hybrid app development platform which allows us to use a single codebase for running apps on Android and iOS.
- For the owners web application I used [React ](https://reactnative.dev/)a JavaScript library for building user interfaces
- For the admin desktop application I used [Electron ](https://www.electronjs.org/). Electron help us build cross-platform desktop apps that runs on any OS.
- For implementing a live chatting system is used [Firebase](https://firebase.google.com/). Firebase is an app development platform that helps you build and grow apps backed by Google
- This project rely on [Node.js](https://nodejs.org/) a JavaScript runtime built on Chrome's V8 JavaScript engine as a backend infrastructure and [Express](https://expressjs.com/) framework which is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- For persistent storage (database), the app uses [MongoDB](https://www.mongodb.com/). MongoDB is a document database providing scalability and flexibility whilst provisioning the querying and indexing needed for this type of social apps.

<br><br>
<img id="implementation" src="./readme/title5.svg"/>

> Uing the above mentioned tech stacks and the wireframes build with figma from the user stories we have, the implementation of the app is shown as below, these are screenshots from the real app

<h1>Players Mobile App</h1>

| Landing Page                                                     | Login                                                          | Choosing a partner                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| <img src="readme/mobile/landing.png" width="270" height="550" /> | <img src="readme/mobile/login.png" width="270" height="550" /> | <img src="readme/videos/home.gif" width="270" height="550" /> |

<br><br>

<h3>Find activity partners</h3>

| Categories                                                         | Ball Sports                                                     | Water Sports                                                         |
| ------------------------------------------------------------------ | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| <img src="readme/mobile/1stSports.png" width="250" height="500" /> | <img src="readme/mobile/Sports.png" width="250" height="500" /> | <img src="readme/mobile/waterSports.png" width="250" height="500" /> |

<br><br>

| Cycling Sports                                                   | Categories                                                     | Fitness Sports                                                         |
| ---------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| <img src="readme/mobile/cycling.png" width="250" height="500" /> | <img src="readme/mobile/home1.png" width="250" height="500" /> | <img src="readme/mobile/FitnessSports.png" width="250" height="500" /> |

<br><br>

| Winter Sports                                                         | Entertainments                                                         | Players                                                          |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| <img src="readme/mobile/WinterSports.png" width="250" height="500" /> | <img src="readme/mobile/entertainment.png" width="250" height="500" /> | <img src="readme/mobile/Players.png" width="250" height="500" /> |

<br><br>

<h3>Search the map for players and properties for rent</h3>

| Map                                                          | Search Modal                                                       | Search Players                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| <img src="readme/mobile/map.png" width="250" height="500" /> | <img src="readme/mobile/mapSearch.png" width="250" height="500" /> | <img src="readme/videos/mapGif.gif" width="250" height="500" /> |

| Search Properties for rent                                         |
| ------------------------------------------------------------------ |
| <img src="readme/mobile/mapFields.png" width="250" height="500" /> |

<br><br>

<h3>Search properties by category and check live calendar for availability</h3>

| Search Fields for rent                                               | Search Equipments for rent                                           | Rent Properties                                                  |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| <img src="readme/mobile/fields/Play.png" width="250" height="500" /> | <img src="readme/mobile/fields/Bike.png" width="250" height="500" /> | <img src="readme/videos/PlayGif.gif" width="250" height="500" /> |

| Check property availability                                       |
| ----------------------------------------------------------------- |
| <img src="readme/videos/Calendar.gif" width="250" height="500" /> |

<br><br>

<h3>Live chatting system</h3>

| Live Messaging                                                             | Chat                                                                   | Friends Messaging                                                                 |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <img src="readme/mobile/Messages/Messages.png" width="250" height="500" /> | <img src="readme/mobile/Messages/Chat.png" width="250" height="500" /> | <img src="readme/mobile/Messages/FriendsMessages.gif" width="250" height="500" /> |

| Direct Messaging                                                                   |
| ---------------------------------------------------------------------------------- |
| <img src="readme/mobile/Messages/PlayersMessaging.gif" width="250" height="500" /> |

<br><br>

<h3>Friends feeds/posts</h3>

| Drawer Navigation                                               | Feeds                                                                   | Friends Posts                                                           |
| --------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| <img src="readme/mobile/Drawer.png" width="250" height="500" /> | <img src="readme/mobile/Feeds/BikePost.png" width="250" height="500" /> | <img src="readme/mobile/Feeds/FeedsGif.gif" width="250" height="500" /> |

| Add Posts                                                              | Post                                                           |
| ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| <img src="readme/mobile/Feeds/AddPost.gif" width="250" height="500" /> | <img src="readme/mobile/feeds.png" width="250" height="500" /> |

<br><br>

<h3>Adding favorite sports so other players can find me</h3>

| Favorite Sports                                                                       | Add Favorite Sports                                                                    |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img src="readme/mobile/FavoriteSports/FavoritePhoto.png" width="250" height="500" /> | <img src="readme/mobile/FavoriteSports/FavoriteSports.gif" width="250" height="500" /> |

<br><br>

<h3>Managing profile info / Location / Friend Requests</h3>

| Profile                                                          | Add Friends                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| <img src="readme/mobile/profile.png" width="250" height="500" /> | <img src="readme/mobile/Profile/AddFriendGif.gif" width="250" height="500" /> |

<br><br>
<img id="run" src="./readme/title6.svg"/>

> This is an example of how you may give instructions on setting up your project locally.
> To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```
   ![](readme/electron/ezgif.com-gif-maker.gif)
