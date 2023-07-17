import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bidService from './bidService'

const initialState = {
  bids: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new Bid
export const createBid = createAsyncThunk(
  'bids/create',
  async (bidData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await bidService.createBid(bidData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user bids
export const getBids = createAsyncThunk(
  'bids/getAll',
  async (_, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.user.token
      //return await bidService.getBids(token)
      const bids = await bidService.getBids()
      console.log(bids)
      return bids

    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user bid
export const deleteBid = createAsyncThunk(
  'bids/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await bidService.deleteBid(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user bid
export const updateBid = createAsyncThunk(
  'bids/update',
  async (biddata, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.user.token
      console.log("----body---"+biddata.id)
      return await bidService.updateBid(biddata,biddata.id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const bidSlice = createSlice({
  name: 'bid',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBid.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBid.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bids.push(action.payload)
      })
      .addCase(createBid.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateBid.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateBid.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bids.push(action.payload)
      })
      .addCase(updateBid.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getBids.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBids.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bids = action.payload
      })
      .addCase(getBids.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteBid.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteBid.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bids = state.bids.filter(
          (bid) => bid._id !== action.payload.id
        )
      })
      .addCase(deleteBid.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = bidSlice.actions
export default bidSlice.reducer
