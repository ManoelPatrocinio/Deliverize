import React from 'react'
import ReactDOM from 'react-dom'
import { Client_Routers } from './routers/client_routers'

import "./style/global.css"
ReactDOM.render(
  <React.StrictMode>
    <Client_Routers />
  </React.StrictMode>,
  document.getElementById('root')
)
