import { createSlice } from '@reduxjs/toolkit'

export const PopupSlice = createSlice({
  name: 'popup',
  initialState: {
    is_show: false,
    data:[]
  },
  reducers: {
    setShowData: (state,action) => {
        state.is_show = true,
        state.data = action.payload
    },
    setHideData: (state, action) => {
        state.is_show = false,
        state.data = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowData, setHideData } = PopupSlice.actions
export default PopupSlice.reducer
