import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelHistory: [],
    travelTimeInfo: null,
}

export const navigationSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
        setTravelHistory: (state, action) => {
            state.travelHistory = [...state.travelHistory, action.payload]
        }
    }
})

navigationSlice.actions

// Actions that change the Navigation state
export const { setOrigin, setDestination, setTravelTimeInfo, setTravelHistory } = navigationSlice.actions;

// Selectors for getting specific values from state 
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navigationSlice.reducer;