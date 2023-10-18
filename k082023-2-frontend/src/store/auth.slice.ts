import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user_id: number
  isLogged: boolean
}

const initialState: AuthState = {
  user_id: 0,
  isLogged: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (_, action: PayloadAction<AuthState>) => {
      return action.payload;
    },

    logout: () => {
      return initialState;
    }
  }
});

export const { setAuthState, logout } = authSlice.actions;

export default authSlice.reducer;
