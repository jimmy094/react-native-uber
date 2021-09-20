import { createSlice } from "@reduxjs/toolkit";
//#3
//setting the initial state which is null, until user inputs information.
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

//create a slice in data layer
//pass it a name, initalState line: 4
//Need to create actions such as setOrigin, setDestination, setTravelTimeInformation into a REDUCER (line:16) so that it will use/dispatch these actions in the data layer to pull info.
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
       
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
    }
})

//exporting each action so that rest of app has access to it.
export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

//Selectors

//when calling/using selector it should go into the state.nav.origin and give the current value in the data layer
//repeat for all 3 actions
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation


//export so that it is available in the store.js file
export default navSlice.reducer;