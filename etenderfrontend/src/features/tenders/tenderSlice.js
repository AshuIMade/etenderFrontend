import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tenderService from './tenderService'

const initialState = {
  tenders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new Tender
export const createTender = createAsyncThunk(
  'tenders/create',
  async (tenderData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tenderService.createTender(tenderData, token)
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

// Get user Tenders
export const getTenders = createAsyncThunk(
  'tenders/getAll',
  async (_, thunkAPI) => {
    
    try {
      //const token = thunkAPI.getState().auth.user.token
      //return await tenderService.getTenders(token)
      //const tenders = 
      //console.log("Eyas"+tenders)
     //const tenders = await tenderService.getTenders()
     // console.log(x)
      //console.log("Eyas"+tenders)
      return await tenderService.getTenders()

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

// Delete user Tender
export const deleteTender = createAsyncThunk(
  'tenders/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tenderService.deleteTender(id, token)
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

export const tenderSlice = createSlice({
  name: 'tender',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTender.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTender.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tenders.push(action.payload)
      })
      .addCase(createTender.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTenders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTenders.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tenders = action.payload
      })
      .addCase(getTenders.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTender.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTender.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tenders = state.tenders.filter(
          (tender) => tender._id !== action.payload.id
        )
      })
      .addCase(deleteTender.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = tenderSlice.actions
export default tenderSlice.reducer
