import { configureStore } from '@reduxjs/toolkit'
import PopupSlice from '../slice/PopupSlice';

export default configureStore({
  reducer: {
    popup: PopupSlice
  },
});
