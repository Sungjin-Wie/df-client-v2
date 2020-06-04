import { api, searchUrl, infoUrl } from "../api";

const searchFetchStarted = () => {
  return {
    type: "searchFetchStarted",
    payload: {},
  };
};

const searchFetchCompleted = data => {
  return {
    type: "searchFetchCompleted",
    payload: {
      data,
    },
  };
};

export const fetchSearch = (server, name) => {
  return async dispatch => {
    dispatch(searchFetchStarted());
    const res = await api.get(searchUrl(server, name));
    console.log(res);
    const data = res.data.rows;
    return dispatch(searchFetchCompleted(data));
  };
};

const infoFetchStarted = () => {
  return {
    type: "infoFetchStarted",
    payload: {},
  };
};

const infoFetchCompleted = data => {
  return {
    type: "infoFetchCompleted",
    payload: {
      data,
    },
  };
};

export const fetchInfo = (server, id) => {
  return async dispatch => {
    dispatch(infoFetchStarted());
    const res = await api.get(infoUrl(server, id));
    const data = res.data;
    return dispatch(infoFetchCompleted(data));
  };
};
