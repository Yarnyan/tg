import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    currentStep: 1,
    profileVisible: true,
    phoneVisible: true, 
  },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 1) state.currentStep -= 1;
    },
    setProfileVisible: (state, action) => {
      state.profileVisible = action.payload;
    },
    setPhoneVisible: (state, action) => {
      state.phoneVisible = action.payload;
    },
  },
});

export const { nextStep, prevStep, setProfileVisible, setPhoneVisible } = profileSlice.actions;
export default profileSlice.reducer;