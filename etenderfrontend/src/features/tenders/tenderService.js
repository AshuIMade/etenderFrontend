import axios from 'axios'

const API_URL = '/api/v1/tenders/'

// Create new Tender
const createTender = async (tenderData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, tenderData, config)

  return response.data
}

// Get user Tenders
const getTenders = async () => {
  //token
  /**const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }*/
  const response = await axios.get(API_URL)

  //const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user Tender
const deleteTender = async (tenderId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + tenderId, config)

  return response.data
}

const tenderService = {
  createTender,
  getTenders,
  deleteTender,
}

export default tenderService
