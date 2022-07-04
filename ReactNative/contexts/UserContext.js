import { createContext, useReducer } from "react";

export const UserContext = createContext(null);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_USER":
//       return { user: action.payload, ...state };
//     case "ADD_TOKEN":
//       return { token: action.payload, ...state };
//     case "REMOVE_USER": {
//       return { user: null, token: null };
//     }
//   }
// };

// export const [state, dispatch] = useReducer(reducer, {
//   user: null,
//   token: null,
// });
