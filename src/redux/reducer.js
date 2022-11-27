import { actionSearch, actionFavorit, actionLastInfo } from "./action";

const initialStateSearch = {
  search: "",
};

export const reducerSearch = (state = initialStateSearch, action) => {
  switch (action.type) {
    case actionSearch.SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

const initialFavorit = {
  favorit: [],
};

export const reducerFavorit = (state = initialFavorit, action) => {
  switch (action.type) {
    case actionFavorit.ADD_FAVORIT:
      const filterValue = state.favorit.some((v) => v.id === action.payload.id);
      return {
        ...state,
        favorit: filterValue
          ? [...state.favorit]
          : [...state.favorit, action.payload],
      };
    case actionFavorit.REMOVE_FAVORIT:
      return {
        ...state,
        favorit: state.favorit.filter((f) => f.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialInfo = {
  lastRead: { surah: "No select", ayat: "No select" },
  lastListening: { surah: "No select", ayat: "No select" },
};

export const reducerInfo = (state = initialInfo, action) => {
  switch (action.type) {
    case actionLastInfo.LAST_READ:
      return {
        ...state,
        lastRead: action.payload,
      };
    case actionLastInfo.LAST_LISTENING:
      return {
        ...state,
        lastListening: action.payload,
      };
    default:
      return state;
  }
};
