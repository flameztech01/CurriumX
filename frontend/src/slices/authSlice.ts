import { createSlice } from '@reduxjs/toolkit';

interface AdminInfo {
  [key: string]: any;
}

interface AuthState {
  adminInfo: AdminInfo | null;
}

const initialState: AuthState = {
  adminInfo: localStorage.getItem('adminInfo')
    ? JSON.parse(localStorage.getItem('adminInfo') as string)
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdminCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem('adminInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.adminInfo = null;
      localStorage.removeItem('adminInfo');
    },
  },
});

export const { setAdminCredentials, logout } = authSlice.actions;
export default authSlice.reducer;