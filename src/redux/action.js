export const actionSearch = {
  SEARCH: "SEARCH",
};

export const searchByValue = (value) => {
  return { type: actionSearch.SEARCH, payload: value };
};

export const actionFavorit = {
  ADD_FAVORIT: "ADD_FAVORIT",
  REMOVE_FAVORIT: "REMOVE_FAVORIT",
};

export const actionLastInfo = {
  LAST_READ: "LAST_READ",
  LAST_LISTENING: "LAST_LISTENING",
};

export const addFavorit = (value) => {
  return { type: actionFavorit.ADD_FAVORIT, payload: value };
};

export const removeFavorit = (id) => {
  return { type: actionFavorit.REMOVE_FAVORIT, payload: id };
};

export const lastRead = (value) => {
  return { type: actionLastInfo.LAST_READ, payload: value };
};

export const lastListening = (value) => {
  return { type: actionLastInfo.LAST_LISTENING, payload: value };
};
