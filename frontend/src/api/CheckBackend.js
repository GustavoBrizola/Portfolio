/**
 * This code is called in order to check connection with backend server
 * Can be imported by other files to check
 */
import axios from "axios";

// Import from .env
// @ts-ignore
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Request data from backend. Useful for both 
 * 
 * Returns boolean
 * @param {boolean} alertstats Sends information to client about the connection
 */
export default 
async function BackendCheck(alertstats)
{
  let response;
  let data;
  try
  {
    // All messages resqueted from backend should be the same as here
    response = await axios.get(`${BACKEND_URL}/api/request/verify`);
    data = `${response.data.status}: ${response.data.message}`+'\n';

    response = await axios.get(`${BACKEND_URL}/api/request/data`);
    data += `${response.data.message}: ${response.data.timestamp}`+'\n';

    // Prints on browser terminal and sends a alert message to client using parameter
    if (alertstats) 
    {
      console.log(data);
      alert(data);
    }

    return true;
  }
  catch(error)
  {
    // @ts-ignore
    const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred";
    
    if (alertstats) 
    {
      console.error("Backend connection error:", errorMessage);
      alert(`Error: ${errorMessage}`);  
    }

    return false;
  }
}