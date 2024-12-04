import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// ApiProvider
import {  store} from "./redux/store.ts";
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')!).render(
  <StrictMode >
     <Provider store={store}> 

    <App />
  </Provider> 
  </StrictMode>,
)