const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const postReducer = require("../fetures/post/postSlice");

const store = configureStore({
  reducer: {
    post:postReducer
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(createLogger()),
});

module.exports = store;
