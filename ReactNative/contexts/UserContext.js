import { createContext, useReducer } from "react";

export const UserContext = createContext(null);

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_USER":
//       return action.payload;
//     case "REMOVE_USER": {
//       return null;
//     }
//   }
// };

// export const [state, dispatch] = useReducer(userReducer, {
//   user: null,
// });
