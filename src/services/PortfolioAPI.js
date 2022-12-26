/**
 * Service for communicating with the json-server backend
 */
 import axios from 'axios'

 axios.defaults.baseURL = 'http://localhost:3001'
 
 /**
  * GET an endpoint
  */
 const get = async (endpoint) => {
     const res = await axios.get(endpoint)
     return res.data
 }

 /**
 * Get experiences
 */
const getExperience = () => {
    return get('/experience')
}

export default {
    getExperience,
}