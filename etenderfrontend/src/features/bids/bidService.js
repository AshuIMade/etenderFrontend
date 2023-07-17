import axios from 'axios'

const API_URL = '/api/v1/bids/'

// Create new bid
const createBid = async (bidData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bidData, config)

  return response.data
}

// Get user bids
const getBids = async () => {
  /**const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }*/

  //const response = await axios.get(API_URL, config)
  const response = await axios.get(API_URL)

  return response.data
}

// Delete user Tender
const deleteBid = async (bidId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + bidId, config)

  return response.data
}

// update user Tender
const updateBid = async (bid,bidId) => {
  //const config = {
    //headers: {
      //Authorization: `Bearer ${token}`,
    //},
  //}
  console.log("ok final"+bid)

  const response = await axios.put(API_URL + bidId,bid)

  return response.data
}

const tenderService = {
  createBid,
  getBids,
  deleteBid,
  updateBid
}

export default tenderService
