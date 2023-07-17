import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tenderReducer from '../features/tenders/tenderSlice'
import bidReducer from '../features/bids/bidSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tenders: tenderReducer,
        bids: bidReducer,
    },
});
//goals: goalReducer,