import { createSlice, configureStore } from '@reduxjs/toolkit'


const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: []
  },
  reducers: {
    add: (state, action) => {        
        state.employees.push(action.payload)
    },
    populate: (state, action) => {
        state.employees = [...state.employees, ...action.payload]
    },
    clear: state => {
      state.employees = []
  },
    
  }
})

export const { add, populate, clear } = employeesSlice.actions

export const store = configureStore({
  reducer: employeesSlice.reducer
})

