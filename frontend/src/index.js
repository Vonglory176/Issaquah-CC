import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// import reportWebVitals from './reportWebVitals'

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope: ', registration.scope)
      })
      .catch(error => {
        console.error('Service Worker registration failed: ', error)
      })
  })
}

// Unregister service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.getRegistrations().then(registrations => {
//     for (const registration of registrations) {
//       registration.unregister().then(() => {
//         console.log('Service Worker unregistered')
//       })
//     }
//   }).catch(error => {
//     console.error('Error unregistering service workers:', error)
//   })
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
