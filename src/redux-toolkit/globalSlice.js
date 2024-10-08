import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
    showSideBar: true,
  },
  reducers: {
    toggleDarkMode: (state, actions) => {
      return {
        ...state,
        darkMode: actions.payload,
      };
    },
    toggleSidebar: (state, actions) => {
      return {
        ...state,
        showSidebar: actions.payload,
      };
    },
  },
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;

export default globalSlice.reducer;
