const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

//initial state
const initialState = {
  loading: false,
  error: "",
  post: [],
};

//create thunk
const fetchPosts = createAsyncThunk("post/postSlice", async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const posts = await response.json();
  return posts;
});
//create slice
const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.error = ""),
        (state.post = action.payload);
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      (state.loading = false),
        (state.error = action.error.message),
        (state.post = []);
    });
  },
});
//exports
module.exports=postSlice;
module.exports.fetchPosts = fetchPosts;
