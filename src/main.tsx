import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/reset.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Router from './router/Router.tsx'
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <Router />
    </Provider>
  </React.StrictMode>
)
