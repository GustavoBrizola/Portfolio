import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Sites
import Portfolio from 'page/Home'

// Json
import ProjectInfo from 'json/ProjectInfo.json'

// Keep this for management sake as global settings
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <head>
      <link rel="icon" type="image/svg+xml" href={ProjectInfo.browseInfo.browseTab_thumbnail} />
      <title>{ProjectInfo.browseInfo.browseTab_name}</title>
    </head>
    
    {/* Place all pages here */}
    <div id='site'>
      <Portfolio/>
    </div>
  </StrictMode>,
)
