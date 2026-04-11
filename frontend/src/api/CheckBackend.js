/**
 * This code is called in order to check connection with backend server
 * Can be imported by other files to check
 */

import { useEffect } from "react";
import axios from "axios";

// Import from .env
// @ts-ignore
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default
function BackendCheck()
{
    let response;
    let data;
    
    useEffect(() => 
    {
      async function initialize()
      {

        try
        {
          // All messages resqueted from backend should be the same as here
          response = await axios.get(`${BACKEND_URL}/request/verify`);
          data = `${response.data.status}: ${response.data.message}`;
          console.log(data);
          
          response = await axios.get(`${BACKEND_URL}/request/data`);
          data = `${response.data.message}: ${response.data.timestamp}`;
          console.log(data);
          
          response = await axios.post(`${BACKEND_URL}/request/post`,
          {
              message: 'Hello from React frontend',
              timestamp: new Date().toISOString(),
          });
          data = JSON.stringify(response.data, null, 2);
          console.log(data);
        }
        catch(error)
        {
          // @ts-ignore
          setError(error.message);
        }
      }

      initialize();
    }, []);

    /*
    // There's a problem here. Fix
    // This sets a pages that display status
    return ( 
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 820, margin: '48px auto', padding: '24px' }}>
          <h1>Frontend & Backend Connection</h1>
          <section style={{ marginBottom: 24 }}>
            <h2>Backend Verification</h2>
            <p>{data}</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2>Backend Data Response</h2>
            <p>{data}</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2>Echo Response</h2>
            <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 8 }}>{echoMessage}</pre>
          </section>

          {error && (
            <section style={{ color: 'crimson', marginTop: 24 }}>
              <h2>Error</h2>
              <p>{error}</p>
              <p>Confirm the backend is running on <code>{BACKEND_URL}</code> and the frontend dev server is running on <code>{FRONTEND_URL}</code>.</p>
            </section>
          )}
        </div>  
    );
    */
}