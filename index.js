const store = require("./rtk/app/store");
const { fetchPosts } = require("./rtk/fetures/post/postSlice");

// subscribe
store.subscribe(()=>{})
// dispatch
store.dispatch(fetchPosts());