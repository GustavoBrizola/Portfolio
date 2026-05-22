import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// @ts-ignore
import './main.css'

import Portfolio from 'site/Portfolio'

// Keep this for management sake as global settings
// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <head>
      <link rel="icon" type="image/svg+xml" href="https://github.com/GustavoBrizola.png" />
      <title>Gustavo Brizola</title>
    </head>

    <Portfolio/>
  </StrictMode>,
)
