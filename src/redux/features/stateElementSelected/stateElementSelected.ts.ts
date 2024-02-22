import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CounterState {
  id: string
}

// Define the initial state using that type
const initialState: CounterState = {
  id: 'Generador'
}

export const idElementSelectedSlice = createSlice({
  name: 'idElemetSelecte',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    changeId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    }
  }
})

export const { changeId } = idElementSelectedSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const newId = (state: RootState): string => state.idElemetSelecte.id

export const idElementSelectedReducer = idElementSelectedSlice.reducer
