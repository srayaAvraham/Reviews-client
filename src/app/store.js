import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from '../features/reviews/reviewsSlice';

export default configureStore({
  reducer: {
    review: reviewReducer,
  },
});
