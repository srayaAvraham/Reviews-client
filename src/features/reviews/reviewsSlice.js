import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');
const initialState = {
  reviews: {},
  status: 'init',
  error: null,
  searchString: null,
  score: null,
  pagination: {
    current: 0,
    pageSize: 10
  }
}

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async (args, { getState }) => {
  const { pagination, score, searchString } = getState().review;
  let params = args ? {page: args.current - 1,size: args.pageSize} : 
                      {page: pagination.current, size: pagination.pageSize};
  params = score ? { ...params, score } : params;
  params = searchString ? { ...params, productId: searchString } : params;
  params = new URLSearchParams(params).toString();

  const result = await axios.get(`http://localhost:8080/api/reviews?${params}`);
  return result.data;
})

export const setScoreAndFetch = (value) => async dispatch => {
  try {
      await dispatch(setScore(value))
      dispatch(fetchReviews())
  } catch (e) {
      return console.error(e.message);
  }
}

export const setSearchStringAndFetch = (value) => async dispatch => {
  try {
      await dispatch(setSearchString(value))
      dispatch(fetchReviews())
  } catch (e) {
      return console.error(e.message);
  }
}
export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload
      state.pagination = {
        current: 0,
        pageSize: 10
      }
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload
      state.pagination = {
        current: 0,
        pageSize: 10
      }
    }
  },
  extraReducers: {
    [fetchReviews.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchReviews.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.reviews = action.payload
      state.pagination = { total: action.payload.totalItems, current: action.payload.currentPage + 1, pageSize: Math.round(action.payload.totalItems / action.payload.totalPages) }
    },
    [fetchReviews.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});

export const { setScore, setSearchString } = reviewSlice.actions;

export const selectReviews = state => state.review.reviews;
export const selectStatus = state => state.review.status;
export const selectPagination = state => state.review.pagination;

export default reviewSlice.reducer;
