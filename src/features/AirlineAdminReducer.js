import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    airlines: [],
    loading: true
};

const airlineAdminSlice = createSlice({
    name: 'airlineAdminList',
    initialState,
    reducers: {
        setAirlineAdminList: (state, action)=>{
            state.airlines = action.payload;
            state.loading = false;
        },
    }
});

export const { setAirlineAdminList} = airlineAdminSlice.actions;
export default airlineAdminSlice.reducer;