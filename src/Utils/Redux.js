import { createSlice, configureStore } from '@reduxjs/toolkit'
import { employees } from '../Data/fakeEmployees'

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: []
  },
  reducers: {
    add: (state, action) => {        
        state.employees.push(action.payload)
    },
    populate: state => {
        state.employees = employees
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

