// userLoggedSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface UserLoggedState {
  email: string | null
  password: string | null
  // Puedes agregar más campos según sea necesario, como el nombre, ID, etc.
}

const initialState: UserLoggedState = {
  email: null,
  password: null
}

export const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState,
  reducers: {
    setUserLogged: (state, action: PayloadAction<UserLoggedState>) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    clearUserLogged: (state) => {
      state.email = null
      state.password = null
    }
  }
})

export const { setUserLogged, clearUserLogged } = userLoggedSlice.actions

export const selectUserLogged = (state: RootState): UserLoggedState => state.userLogged

export default userLoggedSlice.reducer
