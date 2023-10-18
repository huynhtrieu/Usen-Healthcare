import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  access_token: string | undefined;
}

const initialState: AuthState = {
  access_token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (_, action: PayloadAction<AuthState>) => {
      return action.payload;
    },

    logout: () => {
      return initialState;
    },
  },
});

export const { setAuthState, logout } = authSlice.actions;

export default authSlice.reducer;
