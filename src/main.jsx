import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Portfolio from 'pages/Portfolio'

// Keep this for management sake as global settings
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='site'>
      <Portfolio/>
    </div>
  </StrictMode>,
)
